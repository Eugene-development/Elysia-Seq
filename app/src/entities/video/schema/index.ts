import { gql } from "@elysiajs/apollo";

export const videoTypeDefs = gql`
  type Video {
    value: String
    # comment: [Comment]
  }

  type Query {
    videos: [Video]
    # categoriesWithRubrics: [Category!]!
  }
`;
