import { Rubric } from "../model";
import { Category } from "../../category/model";

export const rubricResolver = {
  Query: {
    rubrics: async () => {
      return await Rubric.findAll({
        include: [
          {
            model: Category,
            // as: "categories", 
            // Это должно совпадать с псевдонимом, используемым в ассоциации Sequelize
          },
        ],
      });
    },
  },
  // Rubric: {
  //   categories: (rubric: any) => {
  //     // Вместо вызова функции, просто возвращаем связанные объекты
  //     return rubric.categories;
  //   },
  // },
};
