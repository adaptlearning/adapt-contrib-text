#adapt-contrib-text

A very simple adapt core contributed text component.


##Installation

First, be sure to install the [Adapt Command Line Interface](https://github.com/adaptlearning/adapt-cli), then from the command line run:-

        adapt install adapt-contrib-text

This component can also be installed by adding the component to the adapt.json file before running `adapt install`:

        "adapt-contrib-text": "*"

##Usage

This is a very simple component with just title, body and instruction text elements.

##Settings overview

For example JSON format, see [example.json](example.json). A description of the core settings can be found at: [Core model attributes](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes)

####_component

This value must be: `text`

####_classes

You can use this setting to add custom classes to your template and LESS file.

####_layout

This defines the position of the component in the block. Values can be `full`, `left` or `right`. 

####displayTitle, body and instruction

The `displayTitle`, `body` and `instruction` settings can be left blank. Although the blank component could be used instead: [adapt-contrib-blank](https://github.com/adaptlearning/adapt-contrib-blank)

##Limitations

To be completed.

##Browser spec

This component has been tested to the standard Adapt browser specification.