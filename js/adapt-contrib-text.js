define([
  'core/js/adapt',
  'core/js/views/componentView'
], function(Adapt, ComponentView) {

  var Text = ComponentView.extend({

    preRender: function() {
      this.checkIfResetOnRevisit();
    },

    postRender: function() {
      this.setReadyStatus();

      this.setupInview();
    },

    setupInview: function() {
      var selector = this.getInviewElementSelector();
      if (!selector) {
        this.setCompletionStatus();
        return;
      }

      this.setupInviewCompletion(selector);
    },

    /**
     * determines which element should be used for inview logic - body, instruction or title - and returns the selector for that element
     */
    getInviewElementSelector: function() {
      if(this.model.get('body')) return '.component__body';

      if(this.model.get('instruction')) return '.component__instruction';

      if(this.model.get('displayTitle')) return '.component__title';

      return null;
    },

    checkIfResetOnRevisit: function() {
      var isResetOnRevisit = this.model.get('_isResetOnRevisit');

      // If reset is enabled set defaults
      if (isResetOnRevisit) {
        this.model.reset(isResetOnRevisit);
      }
    }
  },
  {
    template: 'text'
  });

  return Adapt.register('text', Text);

});
