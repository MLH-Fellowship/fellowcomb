import { GraphbackContext, GraphbackCRUDService } from 'graphback';
import { User, Pod } from './generated-types';

/**
 * Overriding context to add GraphQL-Code-Generator typings to Graphback services
 */
export interface GraphQLContext extends GraphbackContext {
  graphback: {
    Pod: GraphbackCRUDService<Pod>
    User: GraphbackCRUDService<User>
  }
}
