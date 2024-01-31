describe('Text', function () {
  beforeEach(function () {
    cy.getData()
    cy.visit('/');
  });

  it('should display the text components', function () {
    const textComponents = this.data.components.filter((component) => component._component === 'text')

    this.data.contentObjects.filter((page) => page._classes !== 'assessment').forEach((page) => {
      cy.visit(`/#/id/${page._id}`);
      const articlesOnPage = this.data.articles.filter((article) => article._parentId === page._id).map(article => article._id)
      const blocksOnPage = this.data.blocks.filter((block) => articlesOnPage.includes(block._parentId)).map(blocks => blocks._id)
      const componentsOnPage = textComponents.filter((component) => blocksOnPage.includes(component._parentId))

      componentsOnPage.forEach(({ body, displayTitle }) => {
        const bodyWithoutHtml = body.replace(/<[^>]*>/g, '');

        cy.testContainsOrNotExists('.text__title', displayTitle)
        cy.testContainsOrNotExists('.text__body', bodyWithoutHtml)
      })

      cy.visit('/');
    });
  });
});
