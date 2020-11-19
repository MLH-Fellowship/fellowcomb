import { shield } from "graphql-shield";
import {isAuthenticated} from "./rules"

export const permissions = shield({
  Query: {
    me: isAuthenticated
  }
});