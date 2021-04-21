const passwordSchema = require('../models/passwordSchema');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({error: "Format de mot de passe incorrect, [Longueur minimum : 8 caractères] [Doit avoir au moins une majuscule] [Doit avoir au moins un chiffre] [Pas d'espaces acceptés]"});
    
    } else {
        next();
    }
};