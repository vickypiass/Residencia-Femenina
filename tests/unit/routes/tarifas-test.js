import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tarifas', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tarifas');
    assert.ok(route);
  });
});
