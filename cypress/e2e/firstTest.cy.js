describe('StrangeXt Testing...', () => {
  it('It renders heading on the screen', () => {
    cy.visit('http://localhost:3000/')
    
    cy.get('[data-test-id="cypress-title"]')
    .should("exist")
    .should("have.text", "StrangeXt")
  })

  it('Left Arrow should be disabled if the current index is 0', () => {
    cy.visit('http://localhost:3000/')
    
    cy.get(".left-arrow")
    .should('be.disabled')
  })

  it('Left arrow should enable if current Index is greater than 0',()=>{
    cy.visit('http://localhost:3000/')
  
    cy.get('.right-arrow')
    .click()

    cy.get('.left-arrow')
    .should('not.be.disabled')
  })


})