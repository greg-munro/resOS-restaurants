describe('Dark mode test', () => {
  it('Searches for Pizza and switches to dark mode', () => {
    cy.visit('http://localhost:3000/')

cy.get('#search').type('pizza')

cy.wait(2000)
cy.get('.search-submit').click()
cy.get('.toggle-dark-mode').click()
  })
})
