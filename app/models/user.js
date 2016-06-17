import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  name: DS.attr('string'), 
  description: DS.attr('string'),
  address: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  type: DS.attr('string')
});
