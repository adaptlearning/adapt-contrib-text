describe('Text', function () {
  beforeEach(function () {
    cy.getData()
    cy.visit('/');
  });

  it('should display the text components', function () {
    const textComponents = this.data.components.filter((component) => component._component === 'text')
    textComponents.forEach((textComponent) => {
      cy.visit(`/#/preview/${textComponent._id}`);
      const bodyWithoutHtml = textComponent.body.replace(/<[^>]*>/g, '');
      
      // Make sure the current component is tested before moving to the next one
      // Custom cypress tests are async so we need to wait for them to pass first
      let waited = false
      function waitOneSecond() {
        return new Cypress.Promise((resolve, reject) => {
          setTimeout(() => {
            waited = true
    
            resolve()
          }, 1000)
        })
      }

      cy.wrap(null).then(() => {
        return waitOneSecond().then(() => {
          cy.testContainsOrNotExists('.text__title', textComponent.displayTitle)
          cy.testContainsOrNotExists('.text__body', bodyWithoutHtml)
          expect(waited).to.be.true
        })
      })
    });
  });
});
