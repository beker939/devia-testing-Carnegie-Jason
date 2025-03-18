const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Définition des routes du panier
router.post('/', cartController.addToCart); // Ajouter un article au panier
router.get('/', cartController.getCartItems); // Obtenir tous les articles du panier
router.put('/:idCartItem', cartController.updateCartItem); // Mettre à jour la quantité d'un article
router.delete('/:idCartItem', cartController.deleteCartItem); // Supprimer un article du panier

module.exports = router;
