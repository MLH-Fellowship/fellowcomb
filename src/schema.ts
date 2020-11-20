import { nexusPrisma } from "nexus-plugin-prisma";
import { makeSchema, objectType, queryType, stringArg } from "@nexus/schema";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import path from "path";
import { response } from "express";

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.pictureURL();
    t.model.github_url();
    t.model.username();
    t.model.discord_id();
    t.model.linkedin();
    t.model.calendly();
    t.model.clusters();
  },
});

const Cluster = objectType({
  name: "Cluster",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.roleId();
    t.model.users();
    t.model.default();
  },
});

const Query = queryType({
  definition(t) {
    t.field("token", {
      type: "String",
      resolve: (parent, args, context, info) => {
        return context.token;
      },
    });
    t.field("me", {
      type: "User",
      resolve: async (parent, args, context, info) => {
        return await context.prisma.userSession
          .findOne({ where: { id: context.token } })
          .user();
      },
    });
    t.field("user", {
      type: "User",
      args: {
        username: stringArg(),
      },
      resolve: async (parent, args, context, info) => {
        return await context.prisma.user.findOne({
          where: { username: args.username },
        });
      },
    });
    t.list.field("search", {
      type: "User",
      args: {
        searchquery: stringArg(),
      },
      resolve: async (parent, args, context, info) => {
        return await context.prisma.user.findMany({
          where: {
            OR: [
              { username: { contains: args.searchquery } },
              { name: { contains: args.searchquery } },
            ],
          },
        });
      },
    });
  },
});

export const schema = makeSchema({
  types: [Query, User, Cluster],
  plugins: [nexusSchemaPrisma()],
  outputs: {
    schema: path.join(__dirname, "schema.graphql"),
    typegen: path.join(__dirname, "nexus.d.ts"),
  },
  shouldExitAfterGenerateArtifacts: Boolean(
    process.env.NEXUS_SHOULD_EXIT_AFTER_REFLECTION
  ),
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: require.resolve("./context"),
        alias: "Context",
      },
    ],
  },
});
