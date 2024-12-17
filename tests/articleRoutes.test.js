const chai = require('chai');
const chaiHttp = require('chai-http');
const supertest = require('supertest');
const app = require('../app'); // Import the app
const sequelize = require('../config/db'); // Import the database

const { expect } = chai;
const request = supertest(app);

chai.use(chaiHttp);

describe('Article Routes', () => {
    // Before running tests, sync the database
    before(async () => {
        await sequelize.sync({ force: true }); // Reset the database
    });

    it('should create a new article', async () => {
        const res = await request.post('/articles').send({
            libelle: 'Ordinateur',
            prix: 20,
        });

        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('idArticle');
        expect(res.body.libelle).to.equal('Ordinateur');
        expect(res.body.prix).to.equal(20);
    });

    it('should retrieve all article', async () => {
        const res = await request.get('/articles');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1); // Should have one Article
    });

    it('should retrieve a article by ID', async () => {
        const article = await request.post('/articles').send({
            libelle: 'Clavier',
            prix: 15,
        });

        const res = await request.get(`/articles/${article.body.idArticle}`);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('idArticle', article.body.idArticle);
        expect(res.body.libelle).to.equal('Clavier');
    });

    it('should update a article', async () => {
        const article = await request.post('/articles').send({
            libelle: 'Souri',
            prix: 5,
        });

        const res = await request.put(`/articles/${article.body.idArticle}`).send({
            libelle: 'Souri sans fil',
        });

        expect(res.status).to.equal(200);
        expect(res.body.libelle).to.equal('Souri sans fil');
    });

    it('should delete a article', async () => {
        const article = await request.post('/articles').send({
            libelle: 'Ecran',
            prix: 30,
        });

        const res = await request.delete(`/articles/${article.body.idArticle}`);
        expect(res.status).to.equal(204);

        const findRes = await request.get(`/articles/${article.body.idArticle}`);
        expect(findRes.status).to.equal(404);
    });
});
