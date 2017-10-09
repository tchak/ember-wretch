import { module, test } from 'ember-qunit';
import wretch from 'wretch';
import initializer from 'ember-wretch/initializer';
import Pretender from 'pretender';

var server;

module('ember-wretch', {
  before() {
    initializer.initialize();
  },

  beforeEach() {
    server = new Pretender();
  },

  afterEach() {
    server.shutdown();
  }
});

test('wretch', assert => {
  server.get('/omg.json', function() {
    return [
      200,
      { 'Content-Type': 'text/json' },
      JSON.stringify({ name: 'World' })
    ];
  });

  return wretch('/omg.json')
    .get()
    .json()
    .then(data => {
      assert.equal(data.name, 'World');
    });
});
