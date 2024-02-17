import { Elysia } from "elysia";
import { apollo, gql } from '@elysiajs/apollo'

import { typeDefs } from "./entities/category/schema";
import { resolvers } from "./entities/category/resolver";


const app = new Elysia()
    .use(apollo({
            typeDefs,
            resolvers
        })
        
    )
    .listen(8080)
