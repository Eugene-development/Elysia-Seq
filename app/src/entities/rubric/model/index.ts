import sequelize from '../../../db';

const { Sequelize } = require("sequelize");


export const Rubric = sequelize.define('rubric', {
  value: {
    type: Sequelize.STRING,
    allowNull: false
  },
});
