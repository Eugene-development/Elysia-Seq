import sequelize from '../../../db';
import { DataTypes, Model } from 'sequelize';

// sequelize.define('xxx', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   value: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
// }, {
//   tableName: 'Employees'
// });



// Helper function
const uppercaseFirst = str => `${str[0].toUpperCase()}${str.substr(1)}`;

class Image extends Model {}
Image.init({
  title: DataTypes.STRING,
  url: DataTypes.STRING
}, { sequelize, modelName: 'image' });

class Video extends Model {}
Video.init({
  title: DataTypes.STRING,
  text: DataTypes.STRING
}, { sequelize, modelName: 'video' });

class Comment extends Model {
  getCommentable(options) {
    if (!this.commentableType) return Promise.resolve(null);
    const mixinMethodName = `get${uppercaseFirst(this.commentableType)}`;
    return this[mixinMethodName](options);
  }
}
Comment.init({
  title: DataTypes.STRING,
  commentableId: DataTypes.INTEGER,
  commentableType: DataTypes.STRING
}, { sequelize, modelName: 'comment' });

Image.hasMany(Comment, {
  foreignKey: 'commentableId',
  constraints: false,
  scope: {
    commentableType: 'image'
  }
});
Comment.belongsTo(Image, { foreignKey: 'commentableId', constraints: false });

Video.hasMany(Comment, {
  foreignKey: 'commentableId',
  constraints: false,
  scope: {
    commentableType: 'video'
  }
});
Comment.belongsTo(Video, { foreignKey: 'commentableId', constraints: false });

Comment.addHook("afterFind", findResult => {
  if (!Array.isArray(findResult)) findResult = [findResult];
  for (const instance of findResult) {
    if (instance.commentableType === "image" && instance.image !== undefined) {
      instance.commentable = instance.image;
    } else if (instance.commentableType === "video" && instance.video !== undefined) {
      instance.commentable = instance.video;
    }
    // To prevent mistakes:
    delete instance.image;
    delete instance.dataValues.image;
    delete instance.video;
    delete instance.dataValues.video;
  }
});