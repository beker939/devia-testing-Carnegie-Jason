const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Define cart routes
router.post('/', cartController.addToCart); // Add an item to the cart
router.get('/', cartController.getCartItems); // Get all cart items
router.put('/:idCartItem', cartController.updateCartItem); // Update a cart item
router.delete('/:idCartItem', cartController.deleteCartItem); // Delete a cart item

module.exports = router;
