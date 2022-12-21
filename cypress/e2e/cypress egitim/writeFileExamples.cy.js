/// <reference types="Cypress" />



describe("Read ve Write Fıle Ornek", () =>{
   
    it("Write File", () =>{
        cy.writeFile('basitNotDefteri.txt', 'Merhaba\n')
        cy.writeFile('basitNotDefteri.txt', 'Cypress Dersine Hoşgeldiniz', {flag: 'a+'}) //flag: Alt satıra geçmek için kullanılır.
    })

    it("Read File", () =>{
        cy.readFile('basitNotDefteri.txt').should('contain', 'Cypress')
    })

    it("Read File-2", () =>{
        cy.readFile('basitNotDefteri.txt').then((text) =>{
            expect(text).to.contain('Merhaba')
        })
    })
})