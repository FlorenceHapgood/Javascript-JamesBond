describe('Question 2', function(){
  it('asks the second question', function(){
    cy.visit('/')
    cy.contains("Easy. So now, which film features the famous exchange, 'Do you expect me to talk?' 'No Mr Bond, I expect you to die!' ?")
  })

  it('tells you if you were right', function(){
    cy.visit('/')
    cy.get('#Second_User_Ans')
    .select('Goldfinger', {force: true})
    // cy.contains('Ok...well done')
  })

  it('tells you if you were wrong', function(){
    cy.visit('/')
    cy.get('#Second_User_Ans')
    .select('Diamonds_Are_Forever', {force: true})
    cy.contains('WRONG!')
  })

  it('tells you if you were wrong', function(){
    cy.visit('/')
    cy.get('#Second_User_Ans')
    .select('Thunderball', {force: true})
    cy.contains('WRONG!')
  })
})
