import { gql } from "apollo-boost";

export const USER = gql`
  query USER($username: String) {
    user(username: $username) {
      name
      discord_id
      username
      github_url
      calendly
      linkedin
      pictureURL
      clusters {
        name
        users {
          username
          pictureURL
          name
        }
      }
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
