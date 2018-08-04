// comments model goes here
const db = require('../db');
const Sequelize = require('sequelize');

const Comment = db.define('comment', {
  Title: {
    type: Sequelize.STRING,
    defaultValue: 'Basic Title',
    allowNull: false,
  },
  Body: {
    type: Sequelize.TEXT,

  },
});

module.exports = Comment;
