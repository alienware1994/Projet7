const { Sequelize, Datatypes} = require("sequelize");
const db = require("../config/db");

const Comment = db.define(
    "comment",
{
    comment: {
        type: Datatypes.STRING,
        defaultValue: '',
        allowNull: false
    },
},
);