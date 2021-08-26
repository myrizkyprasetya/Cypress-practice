describe('test',function(){

    // before(()=>{
    //     cy.visit('https://bukalapak.com')
    // })
    beforeEach(()=>{
        cy.visit('https://bukalapak.com')
    })

    it('test', function(){
        cy.contains('Daftar').click()
    }),
    it('test-1', function(){
        cy.contains('Daftar').click()
    })
})
