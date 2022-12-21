export class Login{
    navigate(){
        cy.visit('https://www.saucedemo.com/')       
    }
    title(title){
        cy.title().should('eq',title)
    }
    username(){
        cy.get('#user-name').should('be.visible').type('standard_user')//username
        return this;
    }
    password(){
        cy.get('#password').type('secret_sauce')

    }
    loginBtn(){
        cy.get('#login-button').click('')

    }
}