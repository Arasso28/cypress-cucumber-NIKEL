import elements from '../pages/selectors.json'

class CheckoutPage {
    seeHomePage(){
      cy.get(elements.checkoutPageElements.headerLabel).should('contain','Swag Labs');
    }

    filterProductsByName() {
      cy.get(elements.checkoutPageElements.productSortContainer).select('Name (Z to A)');
    }
  
    selectFirstProduct() {
      cy.get(elements.checkoutPageElements.inventoryItemContainer).first().click();
      cy.get(elements.checkoutPageElements.primaryButton).click();
    }
  
    proceedToCheckout() {
      cy.get(elements.checkoutPageElements.shoppingCartButton).click();
      cy.get(elements.checkoutPageElements.checkoutButton).click();
    }
  
    fillCheckoutForm(firstName, lastName, postalCode) {
      cy.get(elements.checkoutPageElements.firstNameField).type(firstName);
      cy.get(elements.checkoutPageElements.lastNameField).type(lastName);
      cy.get(elements.checkoutPageElements.postalCodeField).type(postalCode);
      cy.get(elements.checkoutPageElements.continueButton).click();
    }
  
    seeOverview() {
      return cy.get(elements.checkoutPageElements.summaryInfoLabel);
    }
  
    clickFinishButton() {
      cy.get(elements.checkoutPageElements.cartButton).click();
    }
  
    getOrderConfirmation() {
      return cy.get(elements.checkoutPageElements.completeLabel);
    }
  }
  
  export default new CheckoutPage();