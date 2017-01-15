import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({

  hasError: computed.or('hasCostError', 'hasDescriptionError', 'hasCategoryError'),

  hasCostError: computed.alias('expense.validations.attrs.cost.isInvalid'),
  hasDescriptionError: computed.alias('expense.validations.attrs.description.isInvalid'),
  hasCategoryError: computed.alias('expense.validations.attrs.category.isInvalid'),

  _showCostError: false,
  _showDescriptionError: false,
  _showCatrgoryError: false,

  showCostError: computed.and('_showCostError', 'hasCostError'),
  showDescriptionError: computed.and('_showDescriptionError', 'hasDescriptionError'),
  showCategoryError: computed.and('_showCatrgoryError', 'hasCategoryError'),

  actions: {
    addExpense() {
      if (this.get('hasError')) {
        this.set('_showCostError', this.get('hasCostError'));
        this.set('_showDescriptionError', this.get('hasDescriptionError'));
        this.set('_showCatrgoryError', this.get('hasCategoryError'));
      } else {
        this.sendAction('addExpense', this.get('expense'));
      }
    }
  }
});
