describe('Phone Catalogue', () => {
  it('display all phones', () => {
    cy.visit('/');
  });

  it('navigate to phone details', () => {
    cy.get('[role="PhoneItem"]').first().click();
    cy.contains('Specifications');
  });

  it('go back to phone catalogue', () => {
    cy.get('[role="back"]').click();
  });

  it('open directly details view without error', () => {
    cy.visit('/phones/1');
    cy.contains('Specifications');
  });

});
