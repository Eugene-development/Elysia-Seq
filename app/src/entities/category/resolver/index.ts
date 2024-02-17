// src/resolvers/index.ts
import { Category } from "../model";

export const categoryResolver = {
    Query: {
        categories: async () => await Category.findAll()
    }
};