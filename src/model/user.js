const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Model = Sequelize.Model;

class User extends Model {}

User.init(
  {
    userName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'users',
  }
);

module.exports = User;
