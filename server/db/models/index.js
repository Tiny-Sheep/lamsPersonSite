'use strict'


const Comment = require('./comments')
const User = require('./user')
const Post = require('./posts')


User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.hasMany(Comment);
Comment.belongsTo(User);

console.log("getting into my models/index.js")


module.exports = {
  User,
  Post,
  Comment,
};
