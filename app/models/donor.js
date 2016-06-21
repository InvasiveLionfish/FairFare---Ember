import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import User from "./user";

// export default Model.extend({
export default User.extend({
  // name: attr('string'),
  // address: attr('string'),
  // description: attr('string'),
  // phoneNumber: attr('string'),
  // listings: hasMany('listing'),
  // email: attr('string')
  mapURL: Ember.computed('address', function(){
    const address = this.get('address');
    return `https://maps.googleapis.com/maps/api/staticmap?size=200x200&markers=${address}`;
  })
});
