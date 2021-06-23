const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");



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
// db.sync();
module.exports = User; // true