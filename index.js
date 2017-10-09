/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-wretch',

  options: {
    nodeAssets: {
      wretch: {
        vendor: {
          include: ['dist/bundle/wretch.js']
        }
      }
    }
  },

  included: function() {
    this._super.included.apply(this, arguments);

    this.import('vendor/wretch/dist/bundle/wretch.js', {
      using: [{ transformation: 'amd', as: 'wretch' }]
    });
  }
};
