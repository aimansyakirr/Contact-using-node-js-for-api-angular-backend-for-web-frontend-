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
      // define association here
    }
  }
  User.init({
    firstName: {
      type: type.STRING(200),
      defaultValue: null
    },
    lastName:{
      type: type.STRING(200),
      defaultValue: null
    },
    email: {
      type: type.STRING(200),
      defaultValue: null
    },
    phoneNo: {
      type: type.STRING(50),
      defaultValue: null
    },
    password: {
      type: type.STRING(200),
      defaultValue: null
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};