import Components from '../../src/course/en/components.json'
const textComponent = Components[2]

describe('Menu Page', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('should display the text component', () => {
    cy.get('.menu-item').first().should('contain', 'Presentation Components').within(() => {
      cy.get('button').contains('View').click()
    });

    cy.get('.text').eq(1).within(() => {
      cy.get('.text__title').should('contain', textComponent.displayTitle)
      cy.get('.text__body').should('contain', 'Text')
    })
  });
});
