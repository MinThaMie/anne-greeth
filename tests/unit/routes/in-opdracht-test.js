import { module, test } from 'qunit';
import { setupTest } from 'anne-greeth/tests/helpers';

module('Unit | Route | in-opdracht', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:in-opdracht');
    assert.ok(route);
  });
});
