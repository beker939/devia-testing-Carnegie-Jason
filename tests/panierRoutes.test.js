const chai = require('chai');
const chaiHttp = require('chai-http');
const supertest = require('supertest');
const app = require('../app'); // Import the app
const sequelize = require('../config/db'); // Import the database

const { expect } = chai;
const request = supertest(app);

chai.use(chaiHttp);

describe('Cart Routes', () => {
    // Before running tests, sync the database
    before(async () => {
        await sequelize.sync({ force: true }); // Reset the database
    });

    let articleId;

    beforeEach(async () => {
        // Create an article to add to the cart
        const article = await request.post('/articles').send({
            libelle: 'Ordinateur',
            prix: 20,
        });
        articleId = article.body.idArticle;
    });

    it('should add an item to the cart', async () => {
        const res = await request.post('/cart').send({
            articleId,
            quantity: 2,
        });

        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('idCartItem');
        expect(res.body.articleId).to.equal(articleId);
        expect(res.body.quantity).to.equal(2);
    });

    it('should retrieve all items in the cart', async () => {
        await request.post('/cart').send({ articleId, quantity: 1 });
        const res = await request.get('/cart');

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.greaterThan(0);
    });

    it('should update the quantity of an item in the cart', async () => {
        const cartItem = await request.post('/cart').send({ articleId, quantity: 1 });
        const res = await request.put(`/cart/${cartItem.body.idCartItem}`).send({
            quantity: 3,
        });

        expect(res.status).to.equal(200);
        expect(res.body.quantity).to.equal(3);
    });

    it('should delete an item from the cart', async () => {
        const cartItem = await request.post('/cart').send({ articleId, quantity: 1 });
        const res = await request.delete(`/cart/${cartItem.body.idCartItem}`);

        expect(res.status).to.equal(204);
    });

    it('should return 404 for a non-existent cart item', async () => {
        const res = await request.get('/cart/9999');
        expect(res.status).to.equal(404);
    });
});
