/// <reference types="Cypress" />

describe("Custom commands login icin deneme", () =>{
    it("TC001 - basarili login sayfasi testi", () =>{
        cy.fixture("userdata").as("user")
        cy.visit('https://www.saucedemo.com/')
        cy.get("@user").then((user) =>{
            cy.login(user.username,user.password)
        })

    })
})