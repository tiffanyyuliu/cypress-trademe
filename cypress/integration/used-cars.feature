Feature: Used Cars

  As a trademe customer
  I want to able to view UsedCars category
  So that I find a car to purchase

  Scenario: Able to see named brands in the UsedCars category
    When I navigate to 'UsedCars' page
    Then I should be able to see the number of brands available
    And I should be able to see then number of brands with current listings
    
  Scenario: Able to see number of Kia cars listed
    When I navigate to 'UsedCars' page
    Then I should be able to see the current number of 'Kia' cars listed

  Scenario: Hispano Suiza should not exist as a brand
    When I navigate to 'UsedCars' page
    Then I should not be able to see the brand 'Hispano Suiza'