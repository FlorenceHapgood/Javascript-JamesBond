describe('Question 4', function() {
  it('asks the question', function() {
    cy.visit('/');
    cy.contains('Who was cast as James Bond instead of Timothy Dalton, but was forced to drop out at the last minute,')
    cy.contains('due to contract problems with another project?');
  });

  it('tells you if the answer is right', function() {
    cy.visit('/');
    cy.get('[type="radio"]').check('Pierce_Brosnan');
    cy.contains('Impressive');
  });

  it('tells you if the answer is wrong', function() {
    cy.visit('/');
    cy.get('[type="radio"]').check('Tom_Selleck');
    cy.contains('Nah. It was Pierce Brosnan.');
  });

  it('tells you if the answer is wrong', function() {
    cy.visit('/');
    cy.get('[type="radio"]').check('Ralph_Fiennes');
    cy.contains('Nah. It was Pierce Brosnan.');
  });
});
