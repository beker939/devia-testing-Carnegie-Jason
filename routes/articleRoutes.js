const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Define user routes
router.get('/', articleController.getAllArticle);
router.get('/:idArticle', articleController.getArticleById);
router.post('/', articleController.createArticle);
router.put('/:idArticle', articleController.updateArticle);
router.delete('/:idArticle', articleController.deleteArticle);

module.exports = router;