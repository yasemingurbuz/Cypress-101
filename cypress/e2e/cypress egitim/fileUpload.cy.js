/// <reference types="Cypress" />

describe('cypress file upload', () => {
    it('png file upload',() => {
        const p = "test.png"
        cy.visit('https://fineuploader.com/demos.html')
        cy.wait(1000)
        cy.get('[name="qqfile"]').attachFile(p)

        
    })
    
})