describe('API Tests', () => {
  const baseUrl = 'http://127.0.0.1:8000';

  it('should return the homepage message', () => {
    cy.request(`${baseUrl}/`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Homepage of App');
    });
  });

  // Add more tests for other endpoints here
});