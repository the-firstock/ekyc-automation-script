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




//In the commands.js file in the cypress/support folder
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

// Cypress.Commands.add('signUp', () => {
//     cy.visit('https://dev.enotifiers.com/')
//     cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-qdyxqx"]').should('be.visible').click()
  
//   })

// Cypress.Commands.add('login', () => {
//     cy.visit('https://dev.enotifiers.com/')
//     cy.get('.ScrollHeader_rightContainer__by1p\\+ > .ScrollHeader_rightContainerLoginText__-smIC').click();
  
//   })
// cypress/support/commands.js
import 'cypress-file-upload';

import 'cypress-iframe';
require('@4tw/cypress-drag-drop')