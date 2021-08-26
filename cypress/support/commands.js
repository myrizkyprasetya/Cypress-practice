Cypress.Commands.add('login', ()=>{
    cy.visit('https://bukalapak.com')
    cy.contains('Daftar').click()
})