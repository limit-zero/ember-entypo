Entypo+ Font Icons for EmberJS
==============================================================================

🔣 Adds Entypo+ icons/fonts to Ember. This is merely a font wrapper addon for the [411 carefully crafted premium pictograms by Daniel Bruce — CC BY-SA 4.0](http://www.entypo.com).

Installation
------------------------------------------------------------------------------
```
ember install ember-entypo
```

Usage
------------------------------------------------------------------------------
To use, simply call the component with the icon you'd like to display. For example, to display the user icon:
```
{{entypo-icon "user"}} Hello, User!
```
 
[**View the complete list of icons with examples**](https://limit-zero.github.io/ember-entypo/)

The icons are rendered as `span` elements, classed with `entypo icon-[icon-name]`. To change the element tag name, simply set the `tagName` property when calling the component (just like any other Ember component).

For example, to use an `<i>` element (along with some custom class names), you would use `{{entypo-icon tagName="i" class="custom-class1 custom-class2" "user"}}`.

The CSS targets `.entypo.icon-[icon-name]`, so this addon should _not_ conflict with other icon libraries.

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-entypo`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
