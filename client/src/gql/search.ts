import { gql } from "apollo-boost";

export const SEARCH = gql`
  query($search: String) {
    search(searchquery: $search) {
      name
      username
      pictureURL
    }
  }
`;
// default
