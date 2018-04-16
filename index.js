'use strict';

module.exports = {
  name: 'ember-entypo',

  included(app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/entypo.css');
  },
};
