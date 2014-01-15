/*
* adapt-contrib-text
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Daryl Hedley <darylhedley@hotmail.com>
*/
define(function(require) {

	var ComponentView = require('coreViews/componentView');
	var Adapt = require('coreJS/adapt');

    var Text = ComponentView.extend({
        
        postRender: function() {
        	this.$('.text-body').on('inview', _.bind(function(visible) {
            	if (visible) {
            		this.setCompletionStatus();
            	}
            }, this));
            this.setReadyStatus();
        }
        
    });
    
    Adapt.register("text", Text);
    
});