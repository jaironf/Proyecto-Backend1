'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany(models.Order)
    }
  }
  user.init({
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull:{
        msg: 'Por favor introduce tu nombre'
      },
    },
  },
    email:{
     type: DataTypes.STRING,
     allowNull: false,
     validate:{
      notNull:{
        msg: 'Por favor introduce tu correo'
      },
      isEmail:{
        msg: 'Por favor introduce un correo valido'
      }
     },
    } ,
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'Por favor introduce una contraseña'
        }
      }
    }, 
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return user;
};