'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init({
    isVisible: DataTypes.BOOLEAN,
    message: DataTypes.STRING,
    config: DataTypes.INTEGER,
    commentedAt: DataTypes.DATE,
    nicknameUser: DataTypes.STRING,
    idPost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};