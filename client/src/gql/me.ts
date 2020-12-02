import { gql } from "apollo-boost";

export const ME = gql`
  query me {
    me {
      username
      name
      pictureURL
      podLeaders {
        name
        username
        pictureURL
      }
      mentors {
        name
        username
        pictureURL
      }
    }
  }
`;
