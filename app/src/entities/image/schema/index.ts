import { gql } from "@elysiajs/apollo";

export const imageTypeDefs = gql`
  type Image {
    value: String
    # comments: [Comment]
  }

  type Query {
    images: [Image]
    # categoriesWithRubrics: [Category!]!
  }
`;
