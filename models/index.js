const User = require('./User');
const Review = require('./Review');
const Post = require('./Post');
const Lead = require('./Lead');

User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey:'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = {
    User, Review,
    Post, Lead
};