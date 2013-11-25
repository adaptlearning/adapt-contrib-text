define(["coreViews/componentView", "coreJS/adapt"], function(ComponentView, Adapt) {

    var Text = ComponentView.extend({
        
        postRender: function() {
            console.log("rendering");
            this.setReadyStatus();
            this.setCompletionStatus();
        }
        
    });
    
    Adapt.register("text", Text);
    
});