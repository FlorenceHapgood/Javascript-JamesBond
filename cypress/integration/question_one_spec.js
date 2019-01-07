describe('Question 1', function(){
  it('asks the first question', function(){
    cy.visit('/')
    cy.contains("Let's start off easy. What was the first James Bond film ever made?")
  })

  it('tells you if you were right', function(){
    cy.visit('/')
    cy.get('#First_User_Ans')
    cy.get('[type="radio"]').check('Dr_No')
    cy.contains('Ok...well done')
  })

  it('tells you if you were wrong', function(){
    cy.visit('/')
    cy.get('#First_User_Ans')
    cy.get('[type="radio"]').check('Goldfinger_One')
    cy.contains('WRONG!')
  })

  it('tells you if you were wrong', function(){
    cy.visit('/')
    cy.get('#First_User_Ans')
    cy.get('[type="radio"]').check('From_Russia_With_Love')
    cy.contains('WRONG!')
  })
})
