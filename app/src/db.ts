import { Sequelize } from 'sequelize';
import * as fs from 'fs';

const sequelize = new Sequelize("novostroy", "user777", "dbuser777!", {
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

// Sync models with database
sequelize.sync({ alter: true });


async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

export default sequelize;