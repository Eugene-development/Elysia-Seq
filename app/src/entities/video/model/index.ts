import sequelize from '../../../db';
import { DataTypes } from 'sequelize';

export const Video = sequelize.define('video', {
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

