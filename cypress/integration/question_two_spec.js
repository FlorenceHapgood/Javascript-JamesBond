describe('Question 2', function(){
  it('asks the second question', function(){
    cy.visit('/')
    cy.contains("Easy. So now, which film features the famous exchange, 'Do you expect me to talk?' 'No Mr Bond, I expect you to die!' ?")
  })

})
