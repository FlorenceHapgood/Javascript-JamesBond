describe('The Home Page', function() {
  it('Loads successfully', function() {
    cy.visit('/');
    cy.contains('Welcome to the James Bond Film Quiz App');
  });
});
