require("dotenv").config();
import * as Discord from "discord.js";
import { PrismaClient } from "@prisma/client";
const client = new Discord.Client();
const serverId = "716052909271285803";

async function discordTask(prismaDiscordClient: PrismaClient) {
  console.log("Starting the discord task.");
  const guild = client.guilds.cache.get(serverId);
  const serverRoles = guild.roles.cache.map((role) => ({
    id: role.id,
    name: role.name,
  }));

  await Promise.all(
    serverRoles.map(async (serverRole) => {
      const serverRoleExists = await prismaDiscordClient.cluster.findUnique({
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

  const users = await guild.members.fetch();

  await Promise.all(
    users.map(async (user) => {
      const roles = user.roles.cache.map((role) => ({ roleId: role.id }));
      try {
        return await prismaDiscordClient.user.upsert({
          where: { username: user.user.username },
          create: {
            username: user.user.username,
            discord_id: user.user.id,
            name: user.user.username,
            clusters: {
              connect: roles,
            },
            pictureURL: user.user.avatarURL({
              dynamic: true,
              format: "png",
              size: 256,
            }),
          },
          update: {
            clusters: {
              connect: roles,
            },
            pictureURL: user.user.avatarURL({
              dynamic: true,
              format: "png",
              size: 256,
            }),
          },
        });
      } catch (err) {
        console.log(user.user.username);
        console.log(err);
      }
    })
  );
  console.log("Finished doing the import from Discord server");
}

client.on("ready", async () => {
  const prismaDiscordClient = new PrismaClient();
  await discordTask(prismaDiscordClient);
  setInterval(() => discordTask(prismaDiscordClient), 30 * 60 * 1000);
});

export const startBotProcess = () => {
  client.login(process.env.BOT_TOKEN);
};
