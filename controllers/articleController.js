const Article = require('../models/articleModel');

// Get all articles
exports.getAllArticle = async (req, res) => {
    try {
        const articles = await Article.findAll();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get user by ID
exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.idArticle);
        if (!article) {
            return res.status(404).json({ error: 'article not found' });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new user
exports.createArticle = async (req, res) => {
    try {
        const { libelle, prix } = req.body;
        if (!libelle || !prix) {
            return res.status(400).json({ error: 'label and prix are required' });
        }
        const newArticle = await Article.create({ libelle, prix });
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update user by ID
exports.updateArticle = async (req, res) => {
    try {
        const { libelle, prix } = req.body;
        const article = await Article.findByPk(req.params.idArticle);

        if (!article) {
            return res.status(404).json({ error: 'article not found' });
        }

        await article.update({ libelle, prix });
        res.json(article);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete user by ID
exports.deleteArticle = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.idArticle);
        if (!article) {
            return res.status(404).json({ error: 'User not found' });
        }

        await article.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
