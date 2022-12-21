/// <reference types="Cypress" />

describe('cypress url related commands', () => {
    it('fineuploader sitesine git',() => {
        cy.visit('https://fineuploader.com')    
    })
    it('fineuploader protokolu verify et',() => {
     
        cy.location('protocol').should('contain','https')
    })
    it('fineuploader hostname verify et',() => {
     
        cy.location('hostname').should('eq','fineuploader.com')
    })
   
    it('fineuploader sitesine git',() => {
     
        cy.get('div#menu li:nth-child(2) >a').should('be.visible').click()
        cy.location('pathname').should('eq','/demos.html')
    })
    
})