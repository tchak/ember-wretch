import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupPretender from '../helpers/setup-pretender';
import wretch from 'wretch';

module('ember-wretch', function(hooks) {
  setupTest(hooks);
  setupPretender(hooks);

  test('wretch', function(assert) {
    this.server.get('/omg.json', function() {
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

  test('wretch (with query)', function(assert) {
    this.server.get('/omg/hello.json', function(request) {
      return [
        200,
        { 'Content-Type': 'text/json' },
        JSON.stringify({ name: `Hello ${request.queryParams.hey}` })
      ];
    });

    return wretch('/omg')
      .url('/hello.json')
      .query({ hey: 'you' })
      .get()
      .json()
      .then(data => {
        assert.equal(data.name, 'Hello you');
      });
  });
});
