import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  email: attr('string'),
  password: attr('string'),
  name: attr('string'),
  description: attr('string'),
  address: attr('string'),
  phoneNumber: attr('string'),
  type: attr('string')
});
