import sequelize from '../../../db';

import { Category } from '../../category/model';
import { DataTypes } from "sequelize";

export const Rubric = sequelize.define('rubric', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false
  },
});
// export function associateModels() {
//   Rubric.hasMany(Category, {
//     foreignKey: 'rubricId',
//     as: 'categories', // Опционально, но полезно, если вы хотите использовать псевдоним
//   });
  // Тут можно добавить другие ассоциации, если они есть
// }
