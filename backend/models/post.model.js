// INTEGRER SEQUALIZED
const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");
// model de création de Table pour un post 
const Post = db.define("post", {
    // Model attributes are defined here

    title: {
        type: DataTypes.STRING,
        defaultValue: ''

    },
    content: {
        type: DataTypes.STRING,
        defaultValue: ''

    },
    image:{
        type: DataTypes.STRING,
        defaultValue: null
    }
}, );

// `sequelize.define` also returns the model
console.log(Post === db.models.Post);

module.exports = Post; // true