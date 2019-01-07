describe('Question 4', function() {
  it('asks the question', function() {
    cy.visit('/');
    cy.contains('Who was intended to be James Bond instead of Timothy Dalton, but was forced to pull out last minute, due to contract problems with another project?');
  });

  it('tells you if the answer is right', function() {
    cy.visit('/');
    cy.get('[type="radio"]').check('Pierce_Brosnan');
    cy.contains('Impressive');
  });

  it('tells you if the answer is wrong', function() {
    cy.visit('/');
    cy.get('[type="radio"]').check('Tom_Selleck');
    cy.contains('Nah');
  });

  it('tells you if the answer is wrong', function() {
    cy.visit('/');
    cy.get('[type="radio"]').check('Ralph_Fiennes');
    cy.contains('Nah');
  });
});
