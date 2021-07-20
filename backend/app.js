const express = require('express');
const app = express();
const userRoutes = require('./routes/user.route');
const postRoutes = require('./routes/post.route.js');
const bodyParser = require('body-parser');
require('./models/association');
const path = require('path');




app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    next();
});



app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;