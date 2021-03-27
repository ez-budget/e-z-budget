
// import all models
const Post = require('./Story');
const User = require('./User');
const Comment = require('./Comment');
const Budget = require('./Budget');
//const Finance = require('./Finance');

// create associations

User.hasMany(Post, {
    foreignKey: 'user_id'
});
  
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

User.hasMany(Budget, {
  foreignKey: 'user_id'
});

Budget.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// Budget.hasMany(Finance, {
//   foreignKey: 'budget_id'
// });

// Finance.belongsTo(Budget, {
//   foreignKey: 'budget_id',
//   onDelete: 'SET NULL'
// });

  
module.exports = { User, Post, Comment, Budget };
