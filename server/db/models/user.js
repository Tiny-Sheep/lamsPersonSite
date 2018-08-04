//user model goes here
const db = require('../db');
const Sequelize = require('sequelize');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    defaultValue: 'Lamine',
  },
  lastName: {
    type: Sequelize.STRING,
    defaultValue: 'Sadoun',
  },
  dateOfBirth: {
    type: Sequelize.DATE,
    defaultValue: new Date(1991, 12, 7),
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,

    },
  },
});

module.exports = User;

