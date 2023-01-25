class TextView {

  postRender() {
    this.setupInview();
  }

  setupInview() {
    this.getInviewElementSelector();
  }

  /**
   * determines which element should be used for inview logic - body, instruction or title - and returns the selector for that element
   */
  getInviewElementSelector() {
    if (this.model.get('body')) return '.component__body';
    if (this.model.get('instruction')) return '.component__instruction';
    if (this.model.get('displayTitle')) return '.component__title';
    return null;
  }

}

TextView.template = 'text.jsx';

export default TextView;
