require("dotenv").config();
import * as Discord from "discord.js";
import { PrismaClient } from "@prisma/client";
const client = new Discord.Client();
const serverId = "778274100191821834";

client.on("ready", () => {
  const prismaDiscordClient = new PrismaClient();

  const list = client.guilds.cache.get(serverId);
  const serverRoles = list.roles.cache.map((role) => role.name);
  const members = list.members.cache.map((member) => member.user.username);
  console.log("Started bot process and fetched data");
});

export const startBotProcess = () => {
  client.login(process.env.BOT_TOKEN);
};
