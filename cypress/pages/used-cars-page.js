const TABLE_WITH_MAKES = '[id="makes"]';

export function visit() {
  cy.visit('/motors/used-cars');
}

export function availableBrandsListed() {
  return cy.get(TABLE_WITH_MAKES).find('.count'); // to exclude 'more...'
}

export function brandListing(brand) {
  return cy.get(TABLE_WITH_MAKES).within(() => cy.contains(brand));
}
