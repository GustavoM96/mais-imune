context("Login Page and Dashboard Admin", () => {
    it("logs in with valid credentials", () => {
        cy.viewport(1366, 768)
        cy.visit('http://localhost:3000/login')

        cy.contains('Email')
        cy.contains('Password')
        cy.contains('Logar')
        cy.contains('registro')

        cy.get(':nth-child(2) > .sc-jJoQpE > .sc-cidCJl').type('luciano@feder.com')
        cy.get(':nth-child(3) > .sc-jJoQpE > .sc-cidCJl').type('123456')
        cy.get('.sc-llYToB').click()

        
    })
    it("Admin dashboard has all forms", () => {
        cy.viewport(1366, 768)

        cy.contains('Cadastros')
        cy.contains('Cadastro de vacinas')
        cy.contains('Cadastro de estabelecimentos')
        cy.contains('Vínculo de vacinas')

        cy.get(':nth-child(1) > .sc-GamvQ > .sc-llYToB').click() //Cadastro prof de saude
        cy.contains('Nome Completo')
        cy.get(':nth-child(1) > .sc-cidCJl').type('Nome teste').should('have.value', 'Nome teste')
        cy.contains('Email')
        cy.get(':nth-child(2) > .sc-cidCJl').type('teste@teste.com').should('have.value', 'teste@teste.com')
        cy.contains('CPF')
        cy.get(':nth-child(3) > .sc-cidCJl').type('00000000000').should('have.value', '00000000000')
        cy.contains('Senha')
        cy.get(':nth-child(4) > .sc-cidCJl').type('123456').should('have.value', '123456')
        cy.contains('Cadastrar')
        cy.reload()
        
        cy.get(':nth-child(2) > .sc-GamvQ > .sc-llYToB').click() //Cadastro vacinas
        cy.contains('Nome')
        cy.get('.sc-TBWwm > :nth-child(1) > .sc-cidCJl').type('Nome teste').should('have.value', 'Nome teste')
        cy.contains('Obrigatório')
        cy.contains('Doses')
        cy.contains('Descrição')
        cy.get('.sc-jIkYaL').type('Texto descricao teste').should('have.value', 'Texto descricao teste')
        cy.contains('Cadastrar')
        cy.reload()

        cy.get(':nth-child(3) > .sc-GamvQ > .sc-llYToB').click() //Cadastro estabelecimentos
        cy.contains('Nome')
        cy.contains('Endereço')
        cy.contains('Bairro')
        cy.contains('Cadastrar')
        cy.reload()

        cy.get(':nth-child(4) > .sc-GamvQ > .sc-llYToB').click() //Vinculo vacinas
        cy.contains('Vacinas')
        cy.contains('Estabelecimentos')
        cy.contains('Cadastrar')
        cy.reload()
    })
})