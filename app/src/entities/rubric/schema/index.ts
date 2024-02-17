import { gql } from '@elysiajs/apollo'

export const rubricTypeDefs = gql`
    type Rubric {
        value: String
    }

    type Query {
        rubrics: [Rubric]
    }
`;