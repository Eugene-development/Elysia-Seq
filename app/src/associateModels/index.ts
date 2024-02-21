// associateModels.ts
import { Rubric } from '../entities/rubric/model';
import { Category } from '../entities/category/model';

// export default function associateModels() {
  // Rubric.hasMany(Category, {
  //   foreignKey: 'rubricId',
  //   as: 'categories',
  // });

  // Category.belongsTo(Rubric, {
  //   foreignKey: 'rubricId',
  //   as: 'rubric', 
  // });
// }
export default function associateModels() {
  Rubric.hasMany(Category)
  Category.belongsTo(Rubric, { foreignKey: 'rubricId' });

}

