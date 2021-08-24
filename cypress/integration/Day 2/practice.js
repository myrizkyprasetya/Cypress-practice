describe('kumpulan test case', function(){
    it('tc-1', function(){
        cy.visit('https://demoqa.com/automation-practice-form')

        //1. Input nama awal dan nama akhir.
        cy.get('#firstName').type('Yasifa')
        cy.get('#lastName').type('Prasetya')

        //2. Input email.
        cy.get('#userEmail').type('ifharizky28@gmail.com')

        //3. Check gender.
        cy.get('#gender-radio-1').should('not.be.visible').check({ force: true }).should('be.checked')

        //4. Input mobile number.
        cy.get('#userNumber').type('08812345566')

        //5. Check hobbies.
        cy.get('#hobbies-checkbox-1').should('not.be.visible').check({ force: true }).should('be.checked')

        //6. Isi current address.
        cy.get('#currentAddress').type('Jalan Melati nomor 42')

        //7. Click button submit.
        cy.get('#submit').click()

        
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})