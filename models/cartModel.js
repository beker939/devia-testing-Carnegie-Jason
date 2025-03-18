const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const Article = require('./articleModel');

// Définition du modèle Cart
const Cart = sequelize.define('Cart', {
    idCartItem: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    articleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Article,
            key: 'idArticle'
        },
        onDelete: 'CASCADE'
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
}, {
    timestamps: true
});

// Relation entre Cart et Article
Article.hasMany(Cart, { foreignKey: 'articleId' });
Cart.belongsTo(Article, { foreignKey: 'articleId' });

module.exports = Cart;
