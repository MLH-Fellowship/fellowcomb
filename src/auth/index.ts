require("dotenv").config();
import express from "express";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prismaAuthClient = new PrismaClient();
const router = express.Router();

const createUserSession = (user) => {
  return prismaAuthClient.userSession.create({
    data: {
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });
};

router.post("/github", async (req, res, next) => {
  const { code } = req.body;
  const github_access_token_url = "https://github.com/login/oauth/access_token";

  const github_access_token_request_params = {
    client_id: process.env.GH_CLIENT_ID,
    client_secret: process.env.GH_SECRET,
    code,
  };
  const response = await axios.post(
    github_access_token_url,
    github_access_token_request_params,
    { headers: { accept: "application/json" } }
  );
  const { access_token, scope, token_type } = response.data;

  try {
    const user_api = "https://api.github.com/user";
    const user = await axios.get(user_api, {
      headers: { authorization: `token ${access_token}` },
    });
    const {
      login,
      avatar_url,
      html_url,
      name,
      followers,
      following,
    } = user.data;

    //Check if user is in MLH
    const user_api_orgs = `https://api.github.com/users/${login}/orgs`;
    const user_orgs_response = await axios.get(user_api_orgs, {
      headers: {
        authorization: `token ${access_token}`,
        accept: "application/vnd.github.v3+json",
      },
    });
    const user_orgs: any[] = user_orgs_response.data;
    const isPartOfMLH = user_orgs.reduce<boolean>((acc, curr) => {
      if (curr.login === "MLH-Fellowship") {
        return true;
      }
      return acc;
    }, false);

    console.log(isPartOfMLH);

    if (!isPartOfMLH) {
      res.status(401).send({ error: "Unauthorised" });
      next();
      return;
    }

    const userFromDatabase = await prismaAuthClient.user.findOne({
      where: { username: login },
    });
    // @yugi, I'm checking if it's a new user for now but we also want to check if discord_id doesn't exist
    // and call them newUser as well
    let newUser = false;
    if (userFromDatabase === null) {
      newUser = true;
      const newCreatedUser = await prismaAuthClient.user.create({
        data: {
          username: login,
          name,
          pictureURL: avatar_url,
          github_url: html_url,
          github_followers: followers,
          github_following: following,
          github_access_code: access_token,
        },
      });
      const session = await createUserSession(newCreatedUser);
      res.send({ userId: session.id, newUser });
    } else {
      const existingSessions = await prismaAuthClient.user
        .findOne({ where: { id: userFromDatabase.id } })
        .UserSessions();
      await Promise.all(
        existingSessions.map(async (session) => {
          await prismaAuthClient.userSession.delete({
            where: { id: session.id },
          });
        })
      );
      const session = await createUserSession(userFromDatabase);
      res.send({ userId: session.id, newUser });
    }
  } catch (e) {
    console.log(e);
    res.status(401).send({ error: "Bad credentials" });
  }
  next();
});

router.post("/discord", async (req, res, next) => {
  const { code, userSessionToken, tokenScope, redirect_uri } = req.body;

  const data = {
    client_id: process.env.DISCORD_ID,
    client_secret: process.env.DISCORD_SECRET,
    grant_type: "authorization_code",
    code,
    tokenScope,
    redirect_uri,
  };
  try {
    const discord_auth_api = "https://discord.com/api/oauth2/token";
    const discord_token_response = await axios.post(
      discord_auth_api,
      new URLSearchParams(data),
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const {
      access_token,
      token_type,
      refresh_token,
      scope,
    } = discord_token_response.data;

    const discord_api_me = "https://discord.com/api/users/@me";
    const discordUser = axios.get(discord_api_me, {
      headers: {
        authorization: `${token_type} ${access_token}`,
      },
    });

    const user = await prismaAuthClient.userSession
      .findOne({ where: { id: userSessionToken } })
      .user();
    const updatedUser = await prismaAuthClient.user.update({
      where: { id: user.id },
      data: { discord_access_code: access_token },
    });
    res.status(200).send({ userId: userSessionToken });
  } catch (e) {
    console.log(e);
    res.status(401).send({ error: "Bad credentials" });
  }
});

export default router;
