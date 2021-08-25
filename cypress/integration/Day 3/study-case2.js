describe('kumpulan test case', function(){
    it('tc-01', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')
        
        cy.get('#et_pb_contact_name_0').type('Yasifa').should('have.value', 'Yasifa');
        cy.get('#et_pb_contact_email_0').type('ifharizky@gmail.com').should('have.value', 'ifharizky@gmail.com');
        cy.get('.et_pb_contact_submit').should('have.text', 'Email Me!').click()
    })

    it('tc-02', function(){
        cy.get('[type="radio"]').check('male').should('be.checked')
    })

    it('tc-03', function(){
        cy.get('[type="checkbox"]').check('Car').should('be.checked')
    })

    it('tc-04', function(){
        cy.get('select').select('Audi').should('have.value', 'audi')
    })

    it('tc-05', function(){
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').contains('Click Me').should('have.text', 'Click Me').click()
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})