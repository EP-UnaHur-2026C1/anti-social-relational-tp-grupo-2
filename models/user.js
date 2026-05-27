'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, {
        foreignKey: 'userId',
        as: 'posts'
      });
      User.hasMany(models.Comment, {
        foreignKey: 'userId',
        as: 'comments'  
      });

      // Esta es la parte para identificar a mis seguidores
      User.belongsToMany(models.User, {
        through: models.Follower,
        foreignKey: 'followedId',
        otherKey: 'followerId',
        as: 'followers',
      })

      // Esta es la parte para identificar a los usuarios que sigo
      User.belongsToMany(models.User, {
        through: models.Follower,
        foreignKey: 'followerId',
        otherKey: 'followedId',
        as: 'following',
      })
    }
  }
  User.init({
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};