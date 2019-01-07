describe('Question 2', function() {
  it('asks the second question', function() {
    cy.visit('/');
    cy.contains('Easy. So now, which film features the famous exchange, \'Do you expect me to talk?\' \'No Mr Bond, I expect you to die!\' ?');
  });

  it('tells you if you were right', function() {
    cy.visit('/');
    cy.get('[type="radio"]').check('Goldfinger_Two');
    cy.contains('Hm...not bad, not bad');
  });


  it('tells you if you were wrong', function() {
    cy.visit('/');
    cy.get('[type="radio"]').check('Diamonds_Are_Forever');
    cy.contains('You call yourself a James Bond fan?');
  });

  it('tells you if you were wrong', function() {
    cy.visit('/');
    cy.get('[type="radio"]').check('Thunderball');
    cy.contains('You call yourself a James Bond fan?');
  });
});
