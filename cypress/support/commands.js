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

import inventarioTerinta from "../pages/inventarioTreinta";
import products from "../fixtures/products.json";


Cypress.Commands.add('openAddManualProduct', () => {
    inventarioTerinta.clickBtnAgregarProducto();
    inventarioTerinta.clickBtnCrearProductoManual();
});
Cypress.Commands.add('diliteProduct', () => {
    cy.wait(1000);
    inventarioTerinta.EscribirProductoABuscar(products[0].nameProduct);
    inventarioTerinta.clickBtnProducto();
    inventarioTerinta.clickBtnEliminarProducto();
    inventarioTerinta.clickBtnConfirmarEliminar();
});