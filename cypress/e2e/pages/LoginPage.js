import elements from '../pages/selectors.json'

class LoginPage {
  visit() {
    cy.visit('/');
  }

  login(username, password) {
    cy.get(elements.loginPageElements.usernameField).type(username);
    cy.get(elements.loginPageElements.passwordField).type(password);
    cy.get(elements.loginPageElements.loginButton).click();
  }

  getErrorMessage() {
    return cy.get(elements.loginPageElements.errorMessage);
  }
}

export default new LoginPage();