import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | servicios', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:servicios');
    assert.ok(route);
  });
});
