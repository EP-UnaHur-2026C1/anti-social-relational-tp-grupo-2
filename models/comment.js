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
        foreignKey: 'userId',
        as: 'author'
      });

      // Esta parte determina que el comentario pertenece a un post. 
      Comment.belongsTo(models.Post, {
        foreignKey: 'postId',
        as: 'post'
      });
    }
  }
  Comment.init({
    isVisible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    config: DataTypes.INTEGER,
    commentedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};