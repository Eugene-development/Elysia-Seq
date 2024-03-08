// import sequelize from '../../../db';
// import { DataTypes } from 'sequelize';

// // Helper function
// const uppercaseFirst = (str: any) => `${str[0].toUpperCase()}${str.substr(1)}`;

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