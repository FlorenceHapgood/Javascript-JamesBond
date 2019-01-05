describe('Question 1', function(){
  it('asks the first question', function(){
    cy.visit('/')
    cy.contains("Let's start off easy. What was the first James Bond film ever made?")
  })

  it('tells you if you were right', function(){
    cy.visit('/')
    cy.get('select')
    .select('Dr_No', {force: true})
    cy.contains('Ok...well done')
  })

  it('tells you if you were wrong', function(){
    cy.visit('/')
    cy.get('select')
    .select('Goldfinger', {force: true})
    cy.contains('WRONG!')
  })

  it('tells you if you were wrong', function(){
    cy.visit('/')
    cy.get('select')
    .select('From_Russia_With_Love', {force: true})
    cy.contains('WRONG!')
  })
})
