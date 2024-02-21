import { gql } from '@elysiajs/apollo'

export const categoryTypeDefs = gql`
    type Category {
        value: String
        rubrics: Rubric!
    }

    type Query {
        categories: [Category]
        categoriesWithRubrics: [Category!]!
    }
`;