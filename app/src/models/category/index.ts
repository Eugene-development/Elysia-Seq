import sequelize from '../../db';

const { Sequelize } = require("sequelize");


export const Category = sequelize.define('category', {
  value: {
    type: Sequelize.STRING,
    allowNull: false
  },
  value2: {
    type: Sequelize.STRING,
    allowNull: false
  },
});
