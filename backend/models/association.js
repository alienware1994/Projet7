const User = require('./user.model');
const Post = require('./post.model');
const Comment = require('./comment.model');
// Models qui permet la synchro au démarrage du serveur pour crée les différentes table
User.hasMany(Post, {
    onDelete: "CASCADE", hooks: true, constraints:true
});
Post.belongsTo(User);

Post.hasMany(Comment, {
    onDelete: "CASCADE", hooks: true, constraints:true
});
Comment.belongsTo(Post);

User.hasMany(Comment, {
    onDelete: "CASCADE", hooks: true, constraints:true
});
Comment.belongsTo(User);






////

User.sync();
Post.sync();
Comment.sync();