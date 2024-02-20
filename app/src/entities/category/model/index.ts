import sequelize from '../../../db';
import { DataTypes } from 'sequelize';
import { Rubric } from '../../rubric/model';

export const Category = sequelize.define('category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rubricId: {
    type: DataTypes.INTEGER,
    references: {
      model: Rubric,
      key: 'id',
    }
  },
});

