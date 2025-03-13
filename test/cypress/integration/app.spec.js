// cypress-testing/cypress-testing/cypress/integration/app.spec.js
describe('FastAPI Application Tests', () => {
    it('should return the homepage message', () => {
        cy.request('GET', '/').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Homepage of App');
        });
    });
});