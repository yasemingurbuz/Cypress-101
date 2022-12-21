/// <reference types="Cypress" />

describe("Tarayicida ileri geri kullanimi", () =>{
    it("Cypress io sayfasina git, feature'a tikla sonra geri ve ileri komutlarini kullan", () =>{
        cy.viewport(1920,1080)
        cy.visit('https://testinium.com/')
        cy.title().should('eq',"Home - Testinium")

        cy.get('#mega-menu-item-597 > a').eq(0).click() //eğer çift element derse bunu kullanıyoruz.
        cy.title().should('eq',"Who We Serve - Testinium")
    
        cy.go('back')
        cy.title().should('eq',"Home - Testinium")

        cy.go('forward')
        cy.title().should('eq',"Who We Serve - Testinium")

        cy.go(-1)
        cy.title().should('eq',"Home - Testinium")

        cy.go(1)
        cy.title().should('eq',"Who We Serve - Testinium")

     
    })


   
    })