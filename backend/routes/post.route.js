const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/post.controller');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')
// route CRUD pour accéder au psot de l'api
router.get('/', auth, stuffCtrl.getAllPosts);
router.post('/', auth, multer, stuffCtrl.createPost);
router.post('/comment', auth, stuffCtrl.addComment);
router.get('/:id', auth, stuffCtrl.getPostById);
router.delete('/delete/:id', auth, stuffCtrl.deletePostByID);
router.delete('/deletecomment/:id', auth, stuffCtrl.deleteCommentByID);

module.exports = router;