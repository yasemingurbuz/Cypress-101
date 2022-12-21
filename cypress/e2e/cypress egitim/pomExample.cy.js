/// <reference types="Cypress" />
    import {Login} from "../../pageobjects/login";
    const login = new Login();

describe("SauceDemo Login sayfasi testi", () =>{
    it("TC001 - SauceDemo sayfasina git ve basligi dogrula", () =>{
        login.navigate()
        login.title("Swag Labs");
    })


    it('TC002 - SauceDemo login', () =>{
        login.username()
        login.password()
        login.loginBtn()
    })
})