import sequelize from '../../../db';
import { DataTypes } from 'sequelize';

export const Image = sequelize.define('image', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

