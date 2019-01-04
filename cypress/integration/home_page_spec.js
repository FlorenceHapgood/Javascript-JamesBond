describe('The Home Page', function(){
  it('Loads successfully', function(){
    cy.visit('http://localhost:8080')
    cy.contains('Hello World, Happy New Year')
  })
})
