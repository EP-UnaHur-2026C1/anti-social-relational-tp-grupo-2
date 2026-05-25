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
      // Esta parte determina que el comentario pertenece a un usuario.
      Comment.belongsTo(models.User, {
        foreignKey: 'nicknameUser',
        as: 'user'
      });

      // Esta parte determina que el comentario pertenece a un post. 
      Comment.belongsTo(models.Post, {
        foreignKey: 'idPost',
        as: 'post'
      });
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