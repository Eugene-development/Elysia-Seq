// src/resolvers/index.ts
import { Rubric } from "../model";

export const rubricResolver = {
    Query: {
        rubrics: async () => await Rubric.findAll()
    }
};