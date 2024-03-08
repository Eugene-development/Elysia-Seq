import { gql } from '@elysiajs/apollo'

export const categoryTypeDefs = gql`
    type Category {
        value: String
        rubrics: Rubric!
        # comment: [Comment]
    }

    type Query {
        categories: [Category]
        categoriesWithRubrics: [Category!]!
    }
`;