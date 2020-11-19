import { shield, and } from "graphql-shield";
import {} from "./rules";

export const permissions = shield({
  Query: {
  },
  Mutation: {},
});