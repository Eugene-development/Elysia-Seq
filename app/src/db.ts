import { Sequelize } from "sequelize";
import * as fs from "fs";
// import associateModels from "./associateModels";
import { DataTypes, Model } from "sequelize";


const sequelize = new Sequelize("novostroy", "user777", "dbuser777!", {
  host: "c-c9q0ajkg37dkflk2ghiu.rw.mdb.yandexcloud.net",
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      //rejectUnauthorized: false,
      require: true,
      ca: fs.readFileSync(__dirname + "/sert/root.crt"),
    },
  },
  define: {
    freezeTableName: true
  },
  logging: console.log,
});



// Вспомогательная функция для преобразования первого символа строки в верхний регистр
const uppercaseFirst = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Определение модели Image с использованием метода define
sequelize.define('Image', {
  title: DataTypes.STRING,
  url: DataTypes.STRING
});

// Определение модели Video с использованием метода define
sequelize.define('Video', {
  title: DataTypes.STRING,
  text: DataTypes.STRING
});

// Определение модели Comment с использованием метода define и добавлением метода getCommentable
sequelize.define('Comment', {
  title: DataTypes.STRING,
  commentableId: DataTypes.INTEGER,
  commentableType: DataTypes.STRING
}, {
  hooks: {
    afterFind: (findResult) => {
      if (!Array.isArray(findResult)) findResult = [findResult];
      for (const instance of findResult) {
        if (instance.commentableType === "image" && instance.image !== undefined) {
          instance.commentable = instance.image;
        } else if (instance.commentableType === "video" && instance.video !== undefined) {
          instance.commentable = instance.video;
        }
        // Для предотвращения ошибок:
        delete instance.image;
        delete instance.dataValues.image;
        delete instance.video;
        delete instance.dataValues.video;
      }
    }
  },
  instanceMethods: {
    getCommentable(options) {
      if (!this.commentableType) return Promise.resolve(null);
      const mixinMethodName = `get${uppercaseFirst(this.commentableType)}`;
      return this[mixinMethodName](options);
    }
  }
});

const Image = sequelize.models.Image;
const Video = sequelize.models.Video;
const Comment = sequelize.models.Comment;

// Установка полиморфных связей для модели Image
Image.hasMany(Comment, {
  foreignKey: 'commentableId',
  constraints: false,
  scope: {
    commentableType: 'image'
  }
});
Comment.belongsTo(Image, { foreignKey: 'commentableId', constraints: false });

// Установка полиморфных связей для модели Video
Video.hasMany(Comment, {
  foreignKey: 'commentableId',
  constraints: false,
  scope: {
    commentableType: 'video'
  }
});
Comment.belongsTo(Video, { foreignKey: 'commentableId', constraints: false });


// import sequelize from '../../../db';

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
// const uppercaseFirst = (str) => `${str[0].toUpperCase()}${str.substr(1)}`;

// class Image extends Model {}
// Image.init(
//   {
//     title: DataTypes.STRING,
//     url: DataTypes.STRING,
//   },
//   { sequelize, modelName: "image" }
// );

// class Video extends Model {}
// Video.init(
//   {
//     title: DataTypes.STRING,
//     text: DataTypes.STRING,
//   },
//   { sequelize, modelName: "video" }
// );

// class Comment extends Model {
//   getCommentable(options) {
//     if (!this.commentableType) return Promise.resolve(null);
//     const mixinMethodName = `get${uppercaseFirst(this.commentableType)}`;
//     return this[mixinMethodName](options);
//   }
// }
// Comment.init(
//   {
//     title: DataTypes.STRING,
//     commentableId: DataTypes.INTEGER,
//     commentableType: DataTypes.STRING,
//   },
//   { sequelize, modelName: "comment" }
// );

// Image.hasMany(Comment, {
//   foreignKey: "commentableId",
//   constraints: false,
//   scope: {
//     commentableType: "image",
//   },
// });
// Comment.belongsTo(Image, { foreignKey: "commentableId", constraints: false });

// Video.hasMany(Comment, {
//   foreignKey: "commentableId",
//   constraints: false,
//   scope: {
//     commentableType: "video",
//   },
// });
// Comment.belongsTo(Video, { foreignKey: "commentableId", constraints: false });

// Comment.addHook("afterFind", (findResult) => {
//   if (!Array.isArray(findResult)) findResult = [findResult];
//   for (const instance of findResult) {
//     if (instance.commentableType === "image" && instance.image !== undefined) {
//       instance.commentable = instance.image;
//     } else if (
//       instance.commentableType === "video" &&
//       instance.video !== undefined
//     ) {
//       instance.commentable = instance.video;
//     }
//     // To prevent mistakes:
//     delete instance.image;
//     delete instance.dataValues.image;
//     delete instance.video;
//     delete instance.dataValues.video;
//   }
// });

class User extends Model {}

User.init({
  title: DataTypes.STRING,
  url: DataTypes.STRING
}, { sequelize, modelName: 'user' });


// Sync models with database
sequelize.sync({ alter: true });

// sequelize.sync({ alter: true }).then(() => {
//   associateModels(); // Установить ассоциации после синхронизации моделей
//   // ... (запуск сервера или другая логика приложения)
// });

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

export default sequelize;
