const Cart = require('../models/cartModel');
const Article = require('../models/articleModel');

// Add an item to the cart
exports.addToCart = async (req, res) => {
    try {
        const { articleId, quantity } = req.body;

        if (!articleId || !quantity) {
            return res.status(400).json({ error: 'articleId and quantity are required' });
        }

        const article = await Article.findByPk(articleId);
        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }

        const cartItem = await Cart.create({ articleId, quantity });
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Retrieve all cart items
exports.getCartItems = async (req, res) => {
    try {
        const cartItems = await Cart.findAll();
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update cart item quantity
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

// Delete a cart item
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
