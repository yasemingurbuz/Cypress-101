describe("Trigger Events", () => {
    it('Trigger Events - Mouseover', () => {
        cy.visit('https://www.amazon.de/')
        cy.get('#sp-cc-accept').click()
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mouseover')
        cy.get('div#nav-al-your-account a:nth-child(2) > span').click()
    })

    it('Trigger Events - Mouseover2', () => {
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mouseover')
        cy.get('div#nav-al-your-account a:nth-child(15) > span').click()
    })
})