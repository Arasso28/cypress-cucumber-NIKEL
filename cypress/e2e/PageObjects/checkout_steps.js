// cypress/support/step_definitions/checkout_steps.js

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I navigate to the Saucedemo website', () => {
  cy.visit('/');
});

When('I login with valid credentials', () => {
  // Your login implementation here
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
});

When('I filter products by name Z-A', () => {
  // Your implementation here, e.g., select the sorting option
  cy.get('.product_sort_container').select('Name (Z to A)');
});

When('I select the first product to add to the cart', () => {
  // Your implementation here, e.g., click on the first product
  cy.get('.inventory_item_name').first().click();
  cy.get('.btn_primary').click();
});

When('I go to the cart and proceed to checkout', () => {
  // Your implementation here, e.g., navigate to the cart and checkout
  cy.get('.shopping_cart_link').click();
  cy.get('.checkout_button').click();
});

When('I fill the checkout form', () => {
  // Your implementation here, e.g., fill the form fields
  cy.get('#first-name').type('user');
  cy.get('#last-name').type('testing');
  cy.get('#postal-code').type('12345');
  cy.get('.cart_button').click();
});

When('I see the overview checkout', () => {
  // Your implementation here, e.g., verify the overview details
  cy.get('.summary_info').should('exist');
});

When('I click finish button', () => {
  cy.get('.cart_footer .btn_action.cart_button').click();
});

Then('I should see the order confirmation', () => {
  // Your implementation here, e.g., verify the order confirmation message
  cy.url().should('include', 'checkout-complete');
  cy.get('.complete-header').should('contain', 'Thank you for your order!');
});

When('I login with username {string} and password {string}', (username, password) => {
  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});

Then('I should see the error message {string}', (expectedResult) => {
  cy.get('.error').should('contain', expectedResult);
});
