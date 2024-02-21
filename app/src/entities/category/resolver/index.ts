import { Rubric } from "../../rubric/model";
import { Category } from "../model";

export const categoryResolver = {
    Query: {
        categories: async () => await Category.findAll({
        include: [
          {
            model: Rubric,
            // as: "categories", 
            // Это должно совпадать с псевдонимом, используемым в ассоциации Sequelize
          },
        ],
      })
    }
};