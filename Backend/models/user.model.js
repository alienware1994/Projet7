const { Sequelize, Datatypes } = require("sequelize");
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
        isAdmin: {
            type: Datatypes.BOOLEAN,
            defaultValue: false,
        }
    },
    );
    module.exports = User; //TRUE