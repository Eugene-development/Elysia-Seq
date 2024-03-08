import { Image } from "../model";

export const imageResolver = {
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
    images: async () => await Image.findAll(),
    // categoriesWithRubrics: async () => {
    //   return await Category.findAll({
    //     include: [{
    //       model: Rubric,
    //       required: true
    //     }]
    //   });
    // }
  },
//   Category: {
//     rubrics: (parent: any) => {
//       return parent.getRubric();
//     }
//   }
};