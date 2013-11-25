define(["coreViews/componentView", "coreJS/adapt"], function(ComponentView, Adapt) {

    var Text = ComponentView.extend({
        
        postRender: function() {
            console.log("rendering");
            this.checkReadyStatus();
            this.checkCompletionStatus();
        }
        
    });
    
    Adapt.register("text", Text);
    
});