// src/resolvers/index.ts
import { Category } from "../model";

export const resolvers = {
    Query: {
        categories: async () => await Category.findAll()
    }
};