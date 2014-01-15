/*
* adapt-contrib-text
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Daryl Hedley <darylhedley@hotmail.com>
*/
define(function(require) {

	var ComponentView = require('coreViews/componentView');
	var Adapt = require('coreJS/adapt');

    var Text = ComponentView.extend({

        events: {
            'inview .text-body': 'inview'
        },
        
        postRender: function() {
            this.setReadyStatus();
        }

        inview: function(event, visible) {
            if (visible) {
                this.setCompletionStatus();
            }
        }
        
    });
    
    Adapt.register("text", Text);
    
});