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
        foreignKey: 'nicknameUser',
        as: 'posts'
      });
      User.hasMany(models.Comment, {
        foreignKey: 'nicknameUser',
        as: 'comments'  
      });

      // Esta es la parte para identificar a mis seguidores
      User.belongsToMany(Models.User, {
        through: models.Follower,
        foreignKey: 'followedNickname',
        otherKey: 'followerNickname', 
        as: 'followers',
      })

      // Esta es la parte para identificar a los usuarios que sigo
      User.belongsToMany(Models.User, {
        through: models.Follower,
        foreignKey: 'followerNickname',
        otherKey: 'followedNickname', 
        as: 'following',
      })
    }
  }
  User.init({
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};