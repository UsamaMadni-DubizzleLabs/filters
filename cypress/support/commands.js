// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//login
const vas_uae_affi = "https://prelivev2-vas-uae-affiliates.jarvisempg.com/admin/login"
Cypress.Commands.add("login", (email, password) => {
    cy.visit(vas_uae_affi);
    cy.contains("Login with Email").click();
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });
