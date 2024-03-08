import sequelize from "../../../db";
import { DataTypes, Model } from "sequelize";

// sequelize.define('xxx', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   value: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
// }, {
//   tableName: 'Employees'
// });

class User extends Model {}

User.init(
  {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  { sequelize, modelName: "user" }
);

sequelize.sync({ alter: true });
