describe('Text', function () {
  beforeEach(function () {
    cy.getData();
  });

  it('should display the text components', function () {
    const textComponents = this.data.components.filter(component => component._component === 'text');
    const stripHtml = cy.helpers.stripHtml;
    textComponents.forEach(textComponent => {
      cy.visit(`/#/preview/${textComponent._id}`);

      cy.testContainsOrNotExists('.text__body', stripHtml(textComponent.body));
      cy.testContainsOrNotExists('.text__title', stripHtml(textComponent.displayTitle));

      // Make sure the current component is tested before moving to the next one
      // Custom cypress tests are async so we need to wait for them to pass first
      cy.wait(1000);
    });
  });
});
