'use strict';

module.exports = {
  name: 'ember-wretch',
  included: function() {
    this._super.included.apply(this, arguments);

    this.import('node_modules/wretch/dist/bundle/wretch.js', {
      using: [{ transformation: 'amd', as: 'wretch' }]
    });
  }
};
