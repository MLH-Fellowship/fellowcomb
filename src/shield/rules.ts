import { Context } from "../context";
import { rule } from "graphql-shield";

export const isAuthenticated = rule({ cache: "contextual" })(
  async (parent, args, ctx: Context) => {
    const userSession = await ctx.prisma.userSession.findOne({where: {id: ctx.token}});
    if(userSession){
      return true
    }
    return false;
  }
);