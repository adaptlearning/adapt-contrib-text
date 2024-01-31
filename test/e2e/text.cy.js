describe('Text', function () {
  beforeEach(function () {
    cy.getData().then(function (data) {
      this.pages = data.contentObjects.filter(item => item._type === 'page' && item._classes !== 'assessment');
      this.articles = data.filter(item => item._type === 'article');
      this.blocks = data.filter(item => item._type === 'block');
      this.components = data.filter(item => item._type === 'component');
      cy.visit('/');
    });
  });

  it('should display the text components', function () {
    const textComponents = this.components.filter((component) => component._component === 'text')

    this.pages.forEach((page) => {
      cy.visit(`/#/id/${page._id}`);
      const articlesOnPage = this.articles.filter((article) => article._parentId === page._id).map(article => article._id)
      const blocksOnPage = this.blocks.filter((block) => articlesOnPage.includes(block._parentId)).map(blocks => blocks._id)
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
