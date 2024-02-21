import { gql } from '@elysiajs/apollo'

export const categoryTypeDefs = gql`
    type Category {
        value: String
        rubricId: ID
    }

    type Query {
        categories: [Category]
    }
`;