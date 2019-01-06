describe('Question 1', function(){
  it('asks the first question', function(){
    cy.visit('/')
    cy.contains("Let's start off easy. What was the first James Bond film ever made?")
  })

  it('tells you if you were right', function(){
    cy.visit('/')
    cy.get('#First_User_Ans') //had select before, but need to use the select id,
    //as now we have two
    .select('Dr_No', {force: true})
    cy.contains('Ok...well done')
  })

  it('tells you if you were wrong', function(){
    cy.visit('/')
    cy.get('#First_User_Ans')
    .select('Goldfinger', {force: true})
    cy.contains('WRONG!')
  })

  it('tells you if you were wrong', function(){
    cy.visit('/')
    cy.get('#First_User_Ans')
    .select('From_Russia_With_Love', {force: true})
    cy.contains('WRONG!')
  })
})
