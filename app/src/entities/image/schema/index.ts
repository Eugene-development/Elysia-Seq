import { gql } from "@elysiajs/apollo";
// import { Comment } from "../../../db";

export const imageTypeDefs = gql`
  type Image {
    value: String
    # comment: [Comment]
  }

  type Query {
    images: [Image]
    # categoriesWithRubrics: [Category!]!
  }
`;
