'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PostImage.belongsTo(models.Post, {
        foreignKey: 'idPost',
        as: 'post'
      })
    }
  }
  PostImage.init({
    url: DataTypes.STRING,
    idPost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PostImage',
  });
  return PostImage;
};