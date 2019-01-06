describe('Question 3', function(){
  it('asks the third question', function(){
    cy.visit('/')
    cy.contains('Q3) Who wrote the main James Bond theme?')
  })

  it('tells you if you were right', function(){
    cy.visit('/')
    cy.get('#Third_User_Ans')
    cy.get('[type="radio"]').check('John_Barry')
    cy.contains('Not bad at all')
  })

  it('tells you if you were wrong', function(){
    cy.visit('/')
    cy.get('#Third_User_Ans')
    cy.get('[type="radio"]').check('John_Williams')
    cy.contains('Please...no')
  })

  it('tells you if you were wrong', function(){
    cy.visit('/')
    cy.get('#Third_User_Ans')
    cy.get('[type="radio"]').check('David_Arnold')
    cy.contains('Please...no')
  })
})
