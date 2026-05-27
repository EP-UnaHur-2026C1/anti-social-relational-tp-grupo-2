'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Esto permite saber a quien sigue EL usuario.
      Follower.belongsTo(models.User, {
        foreignKey: 'followedId',
        as: 'followedUser'
      });

      // Esto permite saber quien sigue AL usuario.
      Follower.belongsTo(models.User, {
        foreignKey: 'followerId',
        as: 'followerUser'
      });
    }
  }
  Follower.init({
    followerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    followedId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Follower',
    indexes: [
      {
        unique: true,
        fields: ['followerId', 'followedId'],
      },
    ],
  });
  return Follower;
};