'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: 'nicknameUser',
        as: 'user'
      })

      Post.hasMany(models.Comment, {
        foreignKey: 'idPost', 
        as: 'comments'
      })

      Post.hasMany(models.PostImage, {
        foreignKey: 'idPost',
        as: 'images'
      })

      Post.hasMany(models.Tag, {
        throug: models.posttag,
        foreignKey: 'idPost',
        otherKey: 'idTag',
        as: 'tags'
      })
    }
  }
  Post.init({
    description: DataTypes.STRING,
    publicatedAt: DataTypes.DATE,
    nicknameUser: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};