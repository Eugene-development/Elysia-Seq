import { Video } from "../model";

export const videoResolver = {
  Query: {
    videos: async () => await Video.findAll(),
  },
};