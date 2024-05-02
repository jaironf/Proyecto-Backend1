'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    genre: DataTypes.STRING,
    reference_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};