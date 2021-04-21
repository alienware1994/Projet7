require('dotenv').config();

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try
    {
        const token = req.headers.authorizations.split(' ')[1];

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

        const userId = decodedToken.userId;

        if (req.body.userId && req.body.userId !== userId) {
            res.status(401).json({ error: "Requete non autorisée!"});
        } else {
            next();
        }
    } catch {
        res.status(401).json({ error: "Requete non authentifiée!"});
    }
};