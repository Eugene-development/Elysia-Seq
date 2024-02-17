import { gql } from '@elysiajs/apollo'

export const typeDefs = gql`
    type Category {
        value: String
    }

    type Query {
        categories: [Category]
    }
`;