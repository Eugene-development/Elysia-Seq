import sequelize from '../../../db';

// import { Category } from '../../category/model';
import { DataTypes } from "sequelize";



export const Rubric = sequelize.define('rubric', {
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

Rubric.hasMany(Category)
Category.belongsTo(Rubric);
