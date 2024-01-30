describe('Text', function () {
  beforeEach(function () {
    cy.getData().then(function (data) {
      this.data = data;
      cy.visit('/');
    });
  });

  it('should display the text component', function () {
    const textComponent = this.data.components.find((component) => component._id === 'c-15')
    const { body, displayTitle } = textComponent;

    const bodyWithoutHtml = body.replace(/<[^>]*>/g, '');

    cy.get('.menu-item').first().should('contain', 'Presentation Components').within(() => {
      cy.get('button').contains('View').click()
    });

    cy.testContainsOrNotExists('.text__title', displayTitle)
    cy.testContainsOrNotExists('.text__body', bodyWithoutHtml)
  });
});
