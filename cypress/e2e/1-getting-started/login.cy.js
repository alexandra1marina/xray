/// <reference types="cypress" />

describe('Verify login feature', () => {
  
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
  })

  it('TMT-34 Verify if the user is able to login', () => {
    cy.get('#username').type('student');
    cy.get('#password').type('Password12');
    cy.get('#submit').click();
    cy.get('.post-title')
      .should('be.visible')
      .should('have.text', 'Logged In Successfully');
  })

  it('TMT-21 User should not be able to login with wrong credentials', () => {
    cy.get('#username').type('student');
    cy.get('#password').type('Password12');
    cy.get('#submit').click();
    cy.get('#error')
      .should('be.visible')
      .should('have.text', 'Your password is invalid!');
  })
})
