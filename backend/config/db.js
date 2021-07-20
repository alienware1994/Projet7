var Sequelize = require('sequelize');
// variable pour la connection à la base de donnée
var sequelize = new Sequelize('groupomania', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;