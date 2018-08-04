// posts model goes here
const db = require('../db');
const Sequelize = require('sequelize');

const Post = db.define('post', {
  Title: {
    type: Sequelize.STRING,
    defaultValue: 'Basic Title',
    allowNull: false,
  },
  Body: {
    type: Sequelize.TEXT,

  },
});

module.exports = Post;
