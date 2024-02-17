import { Elysia } from "elysia";
import { apollo, gql } from '@elysiajs/apollo'

import { Category } from "./models";


const app = new Elysia()
    .use(apollo({
            typeDefs: gql`
                type Category {
                    value: String
                }

                type Query {
                    categories: [Category]
                }
            `,
            resolvers: {
                Query: {
                    categories: async () => await Category.findAll()
                }
            }
        })
        
    )
    .listen(8080)
