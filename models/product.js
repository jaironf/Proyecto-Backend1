'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
   
    static associate(models) {
      Product.belongsToMany(models.Order,{
        through:models.OrderProduct
      })
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