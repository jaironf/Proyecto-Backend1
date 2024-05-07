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
      Product.belongsToMany(models.Category,{
        through:models.CategoryProduct
      })
    }
  }
  Product.init({
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'Por favor introduce un nombre'
        },
      },
    } ,
    price:{
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull:{
          msg: 'Por favor introduce un precio'
        },
      },
    },
    genre:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'Por favor introduce un género'
        },
      },
    }, 
    reference_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'Por favor introduce un número de referencia'
        }
      }
    } 
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};