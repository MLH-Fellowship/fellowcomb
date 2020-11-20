import { gql } from "apollo-boost";

export const USER = gql`
  query USER($username: String) {
    user(username: $username) {
      name
      discord_id
      username
      clusters {
        name
        users {
          username
          pictureURL
          name
        }
      }
    }
  }
`;
// default
