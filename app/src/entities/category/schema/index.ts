import { gql } from '@elysiajs/apollo'

export const categoryTypeDefs = gql`
    type Category {
        value: String
    }

    type Query {
        categories: [Category]
    }
`;