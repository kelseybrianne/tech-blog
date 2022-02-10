const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'gallery_id',
});

Post.belongsTo(User, {
  foreignKey: 'gallery_id',
});

User.hasMany(Comment, {
  foreignKey: 'gallery_id',
});

Comment.belongsTo(User, {
  foreignKey: 'gallery_id',
});

Post.hasMany(Comment, {
  foreignKey: 'gallery_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Comment, Post };