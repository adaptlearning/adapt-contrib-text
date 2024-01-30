describe('Text', function () {
  beforeEach(function () {
    cy.getData().then(function (data) {
      this.data = data;
      cy.visit('/');
    });
  });

  it('should display the text component', function () {
    const textComponents = this.data.components.filter((component) => component._id = 'c-15')
    const { body, displayTitle } = textComponents[2];

    const bodyWithoutHtml = body.replace(/<[^>]*>/g, '');

    cy.get('.menu-item').first().should('contain', 'Presentation Components').within(() => {
      cy.get('button').contains('View').click()
    });

    cy.get('.text').eq(1).within(() => {
      if (displayTitle) {
        cy.get('.text__title').should('contain', displayTitle);
      } else {
        cy.get('.text__title').should('not.exist');
      }
  
      if (bodyWithoutHtml) {
        cy.get('.text__body').should('contain', bodyWithoutHtml);
      } else {
        cy.get('.text__body').should('not.exist');
      }
    })
  });
});
