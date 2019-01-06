describe('Question 3', function(){
  it('asks the third question', function(){
    cy.visit('/')
    cy.contains('Q3) Who wrote the main James Bond theme?')
  })
})
