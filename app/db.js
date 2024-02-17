const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql", // Вы можете изменить 'mysql' на другой диалект: 'postgres', 'sqlite', 'mssql'
  logging: console.log, // Пример функции логирования, вы можете использовать false, если не хотите логировать запросы
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
