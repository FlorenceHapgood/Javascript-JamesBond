describe('The Home Page', function(){
  it('Loads successfully', function(){
    cy.visit('/')
    cy.contains('Welcome to the James Bond Film Quiz App')
  })

  it('Has question 1', function(){
    cy.visit('/')
    cy.contains("Let's start off easy. What was the first James Bond film ever made?")
    cy.contains('Dr No')
    cy.contains('From Russia With Love')
    cy.contains('Goldfinger')
  })
})
