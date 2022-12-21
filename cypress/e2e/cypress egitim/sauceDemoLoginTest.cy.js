/// <reference types="Cypress" />

describe("SauceDemo Login sayfasi testi", () =>{
    beforeEach(() =>{
        cy.viewport(1920,1080)
    })
    it("TC001 - SauceDemo sayfasina git ve basligi dogrula", () =>{
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq',"Swag Labs")
    })

/*
    it('TC002 - SauceDemo basarisiz login', () =>{
        cy.get('#user-name').type('user')//username
        cy.get('#password').type('123')
        cy.get('#login-button').click('')
    })

    it('TC003 - SauceDemo basarili login', () =>{
        cy.get('#user-name').clear().type('standard_user')//username
        cy.get('#password').clear().type('secret_sauce')
        cy.get('#login-button').click('')
    })
*/
    it('TC002 - SauceDemo basarisiz login testi', () =>{
        cy.fixture("userdata").as("user")
        cy.get("@user").then((user) => {
        cy.login(user.usernameFake, user.passwordFake)
        })
    })

    it('TC003 - SauceDemo basarili login testi', () =>{
        cy.fixture("userdata").as("user")
        
        cy.get("@user").then((user) => {
           
        cy.login(user.username, user.password)
        })
    })
})