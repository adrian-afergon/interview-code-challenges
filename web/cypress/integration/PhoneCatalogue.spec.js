describe('Phone Catalogue', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Test all interactions', () => {
    // navigate to phone details from phone list
    cy.get('[role="PhoneItem"]').first().click();
    cy.contains('Specifications');

    // go back to phone catalogue
    cy.get('[role="back"]').click();
    cy.get('[role="PhoneItem"]');

    // open directly details view without error
    cy.visit('/phones/1');
    cy.contains('Specifications');
  });
});
