const Cart = require('../models/cartModel');
const Article = require('../models/articleModel');

// Ajouter un article au panier
exports.addToCart = async (req, res) => {
    try {
        const { articleId, quantity } = req.body;

        // Vérifier si l'article existe
        const article = await Article.findByPk(articleId);
        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }

        // Ajouter l'article au panier
        const cartItem = await Cart.create({ articleId, quantity });
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Récupérer tous les articles du panier
exports.getCartItems = async (req, res) => {
    try {
        const cartItems = await Cart.findAll();
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour la quantité d'un article dans le panier
exports.updateCartItem = async (req, res) => {
    try {
        const { quantity } = req.body;
        const cartItem = await Cart.findByPk(req.params.idCartItem);

        if (!cartItem) {
            return res.status(404).json({ error: 'Cart item not found' });
        }

        await cartItem.update({ quantity });
        res.json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer un article du panier
exports.deleteCartItem = async (req, res) => {
    try {
        const cartItem = await Cart.findByPk(req.params.idCartItem);
        if (!cartItem) {
            return res.status(404).json({ error: 'Cart item not found' });
        }

        await cartItem.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
