import { gql } from 'apollo-boost';

export const ME = gql`
  query me {
    me {
      username
      name
    }
  }
`;