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

console.log("getting into my models/posts.js")


module.exports = Post;
