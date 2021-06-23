const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post.controllers.js');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

router.get('/', auth, postCtrl.getAllPosts);
router.post('/',auth, multer, postCtrl.createPost);
router.post('/comment', auth, postCtrl.addComment);
router.get('/:id', auth, postCtrl.getPostById);
router.delete('/delete/:id', auth, postCtrl.deletePostByID);
router.delete('/deletecomment', auth, postCtrl.deleteCommentByID);

module.exports = router;

// router.post('/', auth, multer, postCtrl.createPost);