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

module.exports = {
  User,
  Post,
  Comment,
};
