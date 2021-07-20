const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
const auth = require('../middleware/auth')
// Route pour accéder à la création, connection et suppresion d'un compte
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/delete',auth, userCtrl.deleteAcc)

module.exports = router;
