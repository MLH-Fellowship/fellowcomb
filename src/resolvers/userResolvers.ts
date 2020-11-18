import { IResolvers } from 'apollo-server-express';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLContext } from '../customContext';

export const userResolvers: IResolvers = {
  Query: {
    getPodMembers: async (parent: any, args: any, context: GraphQLContext, info: GraphQLResolveInfo) => {
      const {input: {podID}} = args;
      const results = await context.graphback.User.findBy({filter: {podId: {eq: podID}}}, context, info)
      return results.items; 
    }
  }
}
