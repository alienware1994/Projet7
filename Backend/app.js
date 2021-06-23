require('dotenv').config();  
require('./models/synchro.js');    
const express = require('express');  
const app = express();        
const path = require('path');       
const helmet = require('helmet');     
const sanitizeMiddleware = require('sanitize-middleware');     

const userRoutes = require('./routes/users.js');
const postRoutes = require('./routes/post.js');
    
    

    

app.use(helmet());      

app.use((req, res, next) => {       
    res.setHeader('Access-Control-Allow-Origin', '*');      
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');       
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');        
    next();
});

app.use(express.urlencoded({ extended: false }));        
app.use(express.json()); 


   

app.use(sanitizeMiddleware());  
// app.use('/api/auth', userRoutes);    

app.use('/images', express.static(path.join(__dirname, 'images')));   // middleware spécifique qui permet de servir le dossier image lors d'une requête spécifique avec l'image

 app.use('/api/auth', userRoutes);
 app.use('/api/posts', postRoutes);

module.exports = app;       // Exportation de l'application pour y accéder à partir des autres fichiers