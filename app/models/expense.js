import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const { Model, attr } = DS;

const Validations = buildValidations({
  cost: validator('presence', true),
  description: validator('presence', true),
  category: validator('presence', true)
});

export default Model.extend(Validations, {
  // Attributes

  cost: attr('number'),

  description: attr('string'),

  category: attr('string')

});
