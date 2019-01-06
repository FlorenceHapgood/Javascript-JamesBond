describe('Question 3', function(){
  it('asks the third question', function(){
    cy.visit('/')
    cy.contains('Q3) Who wrote the main James Bond theme?')
  })

  it('tells you if you were right', function(){
    cy.visit('/')
    cy.get('#Third_User_Ans')
    .select('John_Barry', {force: true})
    cy.contains('Not bad at all')
  })
})
