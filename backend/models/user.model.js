const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");
// Model user pour la création d'un profil utilisateur
const User = db.define(
    "user", {

        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isAdmin:{
            type: DataTypes.BOOLEAN,
            defaultValue:false,

        }
    }, 

);

module.exports = User; // true