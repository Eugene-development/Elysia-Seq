import sequelize from '../../db';

const { Sequelize } = require("sequelize");


export const Test = sequelize.define('test', {
  valuee2: {
    type: Sequelize.STRING,
    allowNull: false
  },
});
