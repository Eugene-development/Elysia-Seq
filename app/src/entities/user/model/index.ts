import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../db';

class User extends Model {}

User.init({
  title: DataTypes.STRING,
  url: DataTypes.STRING
}, { sequelize, modelName: 'user' });
