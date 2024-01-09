import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../pages/LoginPage';
import CheckoutPage from '../pages/CheckoutPage';

Given('I navigate to the Saucedemo website', () => {
  LoginPage.visit();
});

When('I login with valid credentials', () => {
  LoginPage.login('standard_user', 'secret_sauce');
});

Then('Verify home page', () => {
  CheckoutPage.seeHomePage();
})

When('I filter products by name Z-A', () => {
  CheckoutPage.filterProductsByName();
});

When('I select the first product to add to the cart', () => {
  CheckoutPage.selectFirstProduct();
});

When('I go to the cart and proceed to checkout', () => {
  CheckoutPage.proceedToCheckout();
});

When('I fill the checkout form', () => {
  CheckoutPage.fillCheckoutForm('John', 'Doe', '12345');
});

When('I see the overview checkout', () => {
  CheckoutPage.seeOverview().should('exist');
});

When('I click finish button', () => {
  CheckoutPage.clickFinishButton();
});

Then('I should see the order confirmation', () => {
  CheckoutPage.getOrderConfirmation();
});

When('I login with username {string} and password {string}', (username, password) => {
  LoginPage.login(username, password);
});

Then('I should see the error message {string}', (expectedResult) => {
  LoginPage.getErrorMessage().should('contain', expectedResult);
});
