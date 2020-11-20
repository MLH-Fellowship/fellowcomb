require("dotenv").config();
import * as Discord from "discord.js";
import { PrismaClient } from "@prisma/client";
const client = new Discord.Client();
const serverId = "778274100191821834";

client.on("ready", async () => {
  const prismaDiscordClient = new PrismaClient();

  const guild = client.guilds.cache.get(serverId);

  const serverRoles = guild.roles.cache.map((role) => ({
    id: role.id,
    name: role.name,
  }));

  await Promise.all(
    serverRoles.map(async (serverRole) => {
      const serverRoleExists = await prismaDiscordClient.cluster.findOne({
        where: { name: serverRole.name },
      });
      if (!serverRoleExists) {
        await prismaDiscordClient.cluster.create({
          data: {
            name: serverRole.name,
            roleId: serverRole.id,
          },
        });
      }
    })
  );

  console.log("Loaded the roles");

  await Promise.all(
    //Loop over server roles
    serverRoles.map(async (role) => {
      //Get all members for the role
      console.log("Connecting roles and users");
      const memberForRoles = await guild.roles.cache.get(role.id).members;
      //For each member
      await Promise.all(
        memberForRoles.map(async (member) => {
          const userFromDB = await prismaDiscordClient.user.findOne({
            where: { discord_id: member.user.id },
          });
          if (userFromDB) {
            //Connect the user to the role if user exists
            await prismaDiscordClient.cluster
              .findOne({ where: { roleId: role.id } })
              .users();
            await prismaDiscordClient.cluster.update({
              where: { roleId: role.id },
              data: {
                users: {
                  connect: {
                    id: userFromDB.id,
                  },
                },
              },
            });
          } else {
            // If not exists, Create the user and connect to the role
            await prismaDiscordClient.user.create({
              data: {
                username: member.user.username,
                discord_id: member.user.id,
                name: member.user.username,
                clusters: {
                  connect: {
                    id: role.id,
                  },
                },
              },
            });
          }
        })
      );
    })
  );

  console.log("Started bot process and fetched data");
});

export const startBotProcess = () => {
  client.login(process.env.BOT_TOKEN);
};
