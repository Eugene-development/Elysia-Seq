import { gql } from '@elysiajs/apollo'

export const rubricTypeDefs = gql`
    type Rubric {
        value: String
        # categories: [Category]
    }

    type Query {
        rubrics: [Rubric]
    }
`;