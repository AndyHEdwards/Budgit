import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-expense', 'Integration | Component | new expense', {
  integration: true
});

test('it renders with cost, description and category fields', function(assert) {

  this.set('addExpense', () => assert.ok(true));

  this.render(hbs`{{new-expense addExpense=addExpense}}`);

  assert.ok(!!this.$('.new-expense .field.cost').length);
  assert.ok(!!this.$('.new-expense .field.description').length);
  assert.ok(!!this.$('.new-expense .field.category').length);
});
