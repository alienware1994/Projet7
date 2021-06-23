
const http = require('http');


// const Sequelize = require('sequelize');


// const sequelize = new Sequelize('groupomania', 'root', '', {
//   host: '127.0.0.1',
//   dialect:'mysql'
// });


// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

  

const app = require('./app')

app.set('port, 3000')

const server = http.createServer(app);

server.listen(3000);