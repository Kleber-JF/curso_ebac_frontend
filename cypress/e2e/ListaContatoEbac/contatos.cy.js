/// <reference types="cypress"/>

describe('Testes para a home',()=> {
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve registrar contato', () => {
        cy.get('[type="text"]').type('kleber jhun')
        cy.get('[type="email"]').type('kleber@email.com')
        cy.get('[type="tel"]').type('11989898989')
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk > :nth-child(5)').should('have.text', 'kleber jhun11989898989kleber@email.comDeletarEditar')
    })
    it('Deve editar contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('kleber fukushima')
        cy.get('[type="email"]').clear().type('jhun@cmail.com')
        cy.get('[type="tel"]').clear().type('1234567890')
        cy.get('.alterar').click()
        cy.get('.sc-iAEyYk > :nth-child(5)').should('have.text', 'kleber fukushima1234567890jhun@cmail.comDeletarEditar')
    })
    it('Deve excluir contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('.sc-iAEyYk > :nth-child(5)').should('not.exist')
    })
})