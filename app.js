const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');
const cartRoutes = require('./routes/cartRoutes');



const app = express();

const sequelize = require('./config/db'); 
const Cart = require('./models/cartModel'); 
const Article = require('./models/articleModel');

// Vérifier la synchronisation des modèles
sequelize.sync({ force: true }) // ⚠️ Cela va réinitialiser la base de données !
  .then(() => {
    console.log("Base de données synchronisée !");
  })
  .catch(err => {
    console.error("Erreur de synchronisation :", err);
  });


// Middleware
app.use(bodyParser.json());

app.use('/cart', cartRoutes);

// Create a write stream for log file
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' } // Append logs to the file
);

// Logging middleware (logs written to file)
app.use(morgan('combined', { stream: accessLogStream }));

// Routes
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

module.exports = app;
