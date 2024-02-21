import { Rubric } from "../../rubric/model";
import { Category } from "../model";

export const categoryResolver = {
    // Query: {
    //     categories: async () => await Category.findAll({
    //     include: [
    //       {
    //         model: Rubric,
    //         required: true
    //         // as: "categories", 
    //         // Это должно совпадать с псевдонимом, используемым в ассоциации Sequelize
    //       },
    //     ],
    //   })
    // }

  Query: {
    categories: async () => await Category.findAll({
        include: [
          {
            model: Rubric,
            required: true
            // as: "categories", 
            // Это должно совпадать с псевдонимом, используемым в ассоциации Sequelize
          },
        ],
      }),
    categoriesWithRubrics: async () => {
      return await Category.findAll({
        include: [{
          model: Rubric,
          required: true
        }]
      });
    }
  },
  Category: {
    rubrics: (parent: any) => {
      return parent.getRubric();
    }
  }
};