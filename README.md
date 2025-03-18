TD. TESTING 

Modalités : à rendre le 23/03/2025
Membre du Groupe : Jason Tchaga Chiou, Carnegie beker MOMO
Nom du repo: devia-testing-Carnegie-Jason
URL du repo source utilisé : JavaScript

Services Choisi:
Gestion des articles
Gestion des panier
Users stories

1. Gestion des Articles (BDD)

User Stories

Récupérer tous les articles (GET /articles) :
En tant qu'utilisateur,
Je veux voir une liste de tous les articles,
Afin de pouvoir découvrir les produits disponibles.

Récupérer un article par ID (GET /articles/:id) :
En tant qu'utilisateur,
Je veux voir les détails d'un article spécifique,
Afin de prendre une décision d'achat.

Créer un article (POST /articles) :
En tant qu'administrateur,
Je veux ajouter un nouvel article,
Afin d'enrichir le catalogue.

Mettre à jour un article (PUT /articles/:id) :
En tant qu'administrateur,
Je veux modifier les informations d'un article,
Afin de refléter les changements dans le catalogue.

Supprimer un article (DELETE /articles/:id) :
En tant qu'administrateur,
Je veux supprimer un article du catalogue,
Afin de retirer un produit obsolète ou indisponible.

2. Gestion des Paniers (TDD)

User Stories

Ajouter un article au panier (POST /cart) :
En tant qu'utilisateur,
Je veux ajouter un article à mon panier,
Afin de pouvoir passer une commande plus tard.

Voir le contenu du panier (GET /cart) :
En tant qu'utilisateur,
Je veux voir tous les articles de mon panier,
Afin de vérifier mes choix avant l'achat.

Mettre à jour la quantité d’un article(PUT /cart) : 
En tant qu'utilisateur,
Je veux pouvoir modifier la quantité d’un article dans mon panier,
Afin de m’assurer d’acheter la bonne quantité

Supprimer un article du panier(DELETE /cart) : 
En tant qu'utilisateur,
Je veux pouvoir supprimer un article de mon panier,
Afin de ne plus l’acheter.

Gérer les erreurs pour un article inexistant(GET /cart) : 
En tant qu'utilisateur,
Je veux être informé si je tente d’accéder à un article du panier qui n’existe pas,
Afin de ne pas rencontrer d’erreurs inattendues.

