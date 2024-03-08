import sequelize from "../../../db";
import { DataTypes } from "sequelize";

// Helper function
const uppercaseFirst = (str) => `${str[0].toUpperCase()}${str.substr(1)}`;

export const Comment = sequelize.define(
  "comment",
  {
    title: DataTypes.STRING,
    commentableId: DataTypes.INTEGER,
    commentableType: DataTypes.STRING,
  },
  {
    hooks: {
      afterFind: (findResult) => {
        if (!Array.isArray(findResult)) findResult = [findResult];
        for (const instance of findResult) {
          if (
            instance.commentableType === "image" &&
            instance.image !== undefined
          ) {
            instance.commentable = instance.image;
          } else if (
            instance.commentableType === "video" &&
            instance.video !== undefined
          ) {
            instance.commentable = instance.video;
          }
          // Для предотвращения ошибок:
          delete instance.image;
          delete instance.dataValues.image;
          delete instance.video;
          delete instance.dataValues.video;
        }
      },
    },
    instanceMethods: {
      getCommentable(options) {
        if (!this.commentableType) return Promise.resolve(null);
        const mixinMethodName = `get${uppercaseFirst(this.commentableType)}`;
        return this[mixinMethodName](options);
      },
    },
  }
);

// export const Comment = (sequelize:any) => {
//   const CommentModel = sequelize.define('comment', {
//     title: DataTypes.STRING,
//     commentableId: DataTypes.INTEGER,
//     commentableType: DataTypes.STRING,
//   });

//   CommentModel.prototype.getCommentable = function(options:any) {
//     if (!this.commentableType) return Promise.resolve(null);
//     const mixinMethodName = `get${uppercaseFirst(this.commentableType)}`;
//     return this[mixinMethodName](options);
//   };

//   return CommentModel;
// };

// export const Comment = sequelize.define('comment', {
//     title: DataTypes.STRING,
//     commentableId: DataTypes.INTEGER,
//     commentableType: DataTypes.STRING,
//   });

//   Comment.prototype.getCommentable = function(options:any) {
//     if (!this.commentableType) return Promise.resolve(null);
//     const mixinMethodName = `get${uppercaseFirst(this.commentableType)}`;
//     return this[mixinMethodName](options);
//   };
