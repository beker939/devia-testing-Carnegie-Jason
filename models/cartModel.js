const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const Article = require('./articleModel');

// Define the Cart model
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

module.exports = Cart;
