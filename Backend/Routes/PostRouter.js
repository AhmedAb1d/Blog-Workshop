const router = require('express').Router();
const { getPosts, createPost, updatePost, deletePost, getPost } = require('../Controllers/PostControllers');

router.get('/', getPosts);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/:id', getPost);

module.exports = router;