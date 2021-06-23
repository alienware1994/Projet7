
const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const Post = db.define("post", {
    title: { 
        type: DataTypes.STRING,
        defaultValue: ''
    },
    content: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    images: {
        type: DataTypes.STRING,
        defaultValue: null
    }
}, );

// Sequelize.define return the post model
console.log(Post === db.models.Post);

module.exports = Post; // true