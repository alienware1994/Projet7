const jwt = require('jsonwebtoken');
require("dotenv").config();
// middleware d'authentification avec traduction du token pour raison de sécuriter avec un gros salage
module.exports = (req, res, next) => {

    try {

        const token = req.headers.authorization;
        console.log("head", req.headers.authorization)
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decodedToken);
        const userId = decodedToken.userId;
        if (userId > 0) {
            req.currentUser = userId;
            req.currentUserIsAdmin = decodedToken.isAdmin;
            console.log("current use : ", userId);
            next();
        } else {
            throw 'Invalid user ID';
        }
    } catch {
        res.status(500).json({
            error: new Error('Invalid request!')
        });
    }
};