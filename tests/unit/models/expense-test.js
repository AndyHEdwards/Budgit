import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expense', 'Unit | Model | expense', {
  // Specify the other units that are required for this test.
  needs: ['validator:presence']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
