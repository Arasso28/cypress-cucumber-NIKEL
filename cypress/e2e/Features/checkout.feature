# cypress/integration/checkout.feature

Feature: Checkout Process

  @smoke
  Scenario: Complete Checkout
    Given I navigate to the Saucedemo website
    When I login with valid credentials
    And I filter products by name Z-A
    And I select the first product to add to the cart
    And I go to the cart and proceed to checkout
    And I fill the checkout form
    And I see the overview checkout
    And I click finish button
    Then I should see the order confirmation

  @negative
  Scenario Outline: Invalid Login
    Given I navigate to the Saucedemo website
    When I login with username "<username>" and password "<password>"
    Then I should see the error message "<expectedResult>"

  Examples:
    | username           | password       | expectedResult        |
    | locked_out_user    | secret_sauce   | Epic sadface: Sorry, this user has been locked out.        |
    | standard_user      | secret          | Epic sadface: Username and password do not match any user in this service |
