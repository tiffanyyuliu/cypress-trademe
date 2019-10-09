import { When } from 'cypress-cucumber-preprocessor/steps';
import * as usedCarsPage from '../../pages/used-cars-page';

When('I navigate to {string} page', (page) => {
  switch (page) {
    case 'UsedCars':
      usedCarsPage.visit();
      break;
    default:
      cy.vist();
  }
});
