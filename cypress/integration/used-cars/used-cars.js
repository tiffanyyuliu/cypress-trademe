import { Then } from 'cypress-cucumber-preprocessor/steps';
import * as usedCarsPage from '../../pages/used-cars-page';

Then('I should be able to see the number of brands available', () => {
  usedCarsPage.availableBrandsListed()
    .its('length').then((length) => {
      cy.log(`${length} car brands are available`);
    });
});

Then('I should be able to see then number of brands with current listings', () => {
  usedCarsPage.brandsWithCurrentListing()
    .its('length').then((length) => {
      cy.log(`${length} car brands have listings`);
    });
});


Then('I should be able to see the current number of {string} cars listed', (brand) => {
  usedCarsPage.brandListing(brand)
    .should('exist')
    // a bit weird, since tests are normally be deterministic and we would assert the count here
    // however as required by the exercise, will log the count to console
    .siblings('.count')
    .invoke('text')
    .then((text) => {
      cy.log(`there is currently ${text.replace(/\D/g, '')} listing(s) for ${brand}`);
    });
});

Then('I should not be able to see the brand {string}', (brand) => {
  usedCarsPage.brandListing(brand).should('not.exist');
});
