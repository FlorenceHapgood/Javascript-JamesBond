describe('Question 5', function(){
  it('asks the question', function(){
    cy.visit('/')
    cy.contains('Q5) Which James Bond novel has been made into a film twice?')
  })

  it('tells you if the answer is right', function(){
    cy.visit('/')
    cy.get('#Fifth_User_Ans')
    cy.get('[type="radio"]').check('Casino_Royale')
    cy.contains('Nice, very nice')
  })

  it('tells you if the answer is wrong', function(){
    cy.visit('/')
    cy.get('#Fifth_User_Ans')
    cy.get('[type="radio"]').check("On_Her_Majesty's_Secret_Service")
    cy.contains('Nahuh')
  })

  it('tells you if the answer is wrong', function(){
    cy.visit('/')
    cy.get('#Fifth_User_Ans')
    cy.get('[type="radio"]').check('Live_And_Let_Die')
    cy.contains('Nahuh')
  })
})
