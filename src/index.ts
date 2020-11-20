// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import http from "http";
import { createContext } from "./context";
import { schema } from "./schema";
import auth from "./auth";
import { applyMiddleware } from "graphql-middleware";
import { permissions } from "./shield/permissions";
import { startBotProcess } from "./discord";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", auth);

const apolloServer = new ApolloServer({
  schema: applyMiddleware(schema, permissions),
  context: createContext,
});

apolloServer.applyMiddleware({ app });

const httpServer = http.createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: 4000 }, () => {
  startBotProcess();
  console.log(`🚀  Server ready at http://localhost:4000/graphql`);
});
