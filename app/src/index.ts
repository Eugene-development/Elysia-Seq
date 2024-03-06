import { Elysia } from "elysia";
import { apollo } from '@elysiajs/apollo'

import { typeDefs } from "./combine/defs";
import { resolvers } from "./combine/resolvers";

import associateModels from "./associateModels";

const app = new Elysia()
    .use(apollo({
            typeDefs,
            resolvers
        })
    )
    .listen(8080)

    associateModels();

    