describe('Question 4', function(){
  it('asks the question', function(){
    cy.visit('/')
    cy.contains('Who was intended to be James Bond instead of Timothy Dalton, but was forced to pull out last minute, due to contract problems with another project?')
  })
})
