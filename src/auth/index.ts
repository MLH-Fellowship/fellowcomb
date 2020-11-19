require('dotenv').config();
import express from "express"
import axios from "axios"
import {PrismaClient} from "@prisma/client"

const prismaAuthClient = new PrismaClient()
const router = express.Router();

const createUserSession = (user) => {
  return prismaAuthClient.userSession.create({
    data: {
      user: {
        connect: {
          id: user.id
        }
      }
    }
  })
}

router.post("/github", async (req, res, next) => {
  const {code} = req.body;
  const github_access_token_url = "https://github.com/login/oauth/access_token";

  const github_access_token_request_params = {
    client_id: process.env.GH_CLIENT_ID,
    client_secret: process.env.GH_SECRET,
    code
  }
  const response = await axios.post(github_access_token_url, github_access_token_request_params, {headers: {"accept": "application/json"}});
  const {access_token, scope, token_type} = response.data;
  
  try {
    const user_api = "https://api.github.com/user";
    const user =  await axios.get(user_api, {headers: {"authorization": `token ${access_token}`}});
    const {login, avatar_url, html_url, name, followers, following} = user.data;
    
    const userFromDatabase = await prismaAuthClient.user.findOne({where: {username: login}});
    if(userFromDatabase === null) {
      const newCreatedUser = await prismaAuthClient.user.create({
        data: {
          username: login,
          name,
          pictureURL: avatar_url,
          github_url: html_url,
          github_followers: followers,
          github_following: following,
          github_access_code: access_token,
        }
      })
      const session = await createUserSession(newCreatedUser)
      res.send(session.id)
    } else {
      const session = await createUserSession(userFromDatabase)
      res.send(session.id)
    }
  } catch(e) {
    console.log(e)
    res.status(401).send("Bad credentials")
  }
  next();
});

router.post("/discord", async(req, res, next) => {
  res.send("In progress")
});

export default router;