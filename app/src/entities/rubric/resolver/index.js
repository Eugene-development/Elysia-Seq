// src/resolvers/index.ts
import { Category } from "../../category/model";
import { Rubric } from "../model";

export const rubricResolver = {
  Query: {
    rubrics: async () => await Rubric.findAll(),

    //   rubrics: async () => {
    //     return await Rubric.findAll({
    //       include: [
    //         {
    //           model: Category,
    //           as: "categories", // Это должно совпадать с псевдонимом, используемым в ассоциации Sequelize
    //         },
    //       ],
    //     });
    //   },
    // },
    // Rubric: {
    //   categories: (rubric) => {
    //     return rubric.getCategories(); // Должно быть определено, если у вас есть ассоциация Sequelize
    //   },
  },
};
