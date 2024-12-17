const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

// Define the Article model
const Article = sequelize.define('Article', {
    idArticle: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    libelle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prix: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false
    }
}, {
    timestamps: true
});

module.exports = Article;
