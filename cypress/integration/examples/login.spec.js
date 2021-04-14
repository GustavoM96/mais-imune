context("Login Page", () => {
    it("logs in with valid credentials", () => {
        cy.viewport(1366, 768)
        cy.visit('http://localhost:3000/login')

        cy.contains('Email')
        cy.contains('Password')
        cy.contains('Logar')
        cy.contains('registro')

        cy.get(':nth-child(2) > .sc-ikJzcn > .sc-cCcYRi').type('wesley@mail.com')
        cy.get(':nth-child(3) > .sc-ikJzcn > .sc-cCcYRi').type('123456')
        cy.get('.sc-llYToB').click()
        
    })
})