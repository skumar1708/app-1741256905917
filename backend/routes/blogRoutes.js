const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.getBlogPosts);
router.get('/:id', blogController.getBlogPostById);
router.post('/', blogController.createBlogPost);
router.put('/:id', blogController.updateBlogPost);
router.delete('/:id', blogController.deleteBlogPost);

module.exports = router;