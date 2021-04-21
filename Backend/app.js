require('dotenv').config();      
const express = require('express');    
const bodyParser = require('body-parser');     
const path = require('path');       
const helmet = require('helmet');     
const sanitizeMiddleware = require('sanitize-middleware');     

    
    

const app = express();      

app.use(helmet());      

app.use((req, res, next) => {       
    res.setHeader('Access-Control-Allow-Origin', '*');      
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');       
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');        
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));        
app.use(bodyParser.json());     

app.use(sanitizeMiddleware());      

app.use('/images', express.static(path.join(__dirname, 'images')));   // middleware spécifique qui permet de servir le dossier image lors d'une requête spécifique avec l'image



module.exports = app;       // Exportation de l'application pour y accéder à partir des autres fichiers