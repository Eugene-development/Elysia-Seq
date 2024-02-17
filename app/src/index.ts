import { Elysia } from "elysia";
import { apollo, gql } from '@elysiajs/apollo'

const { Sequelize } = require("sequelize");
const fs = require('fs');


//const app = new Elysia().get("/", () => "Hello Elysia + Sequelize ORM + Docker").listen(3000);

// console.log(
//   `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
// );

const sequelize = new Sequelize("zov", "user777", "dbuser777!", {
  host: "c-c9q0ajkg37dkflk2ghiu.rw.mdb.yandexcloud.net",
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      //rejectUnauthorized: false,
      require: true,
      ca: fs.readFileSync(__dirname + '/sert/root.crt')
    }
  },
  logging: console.log, 
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();



const app = new Elysia()
    .use(
        apollo({
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
                    categories: () => {
                        return [
                            {
                                value: 'Elysia',
                            }
                        ]
                    }
                }
            }
        })
    )
    .listen(8080)
