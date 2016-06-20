import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import User from "./user"

// export default Model.extend({
export default User.extend({
  // name: attr('string'),
  // address: attr('string'),
  // description: attr('string'),
  // phoneNumber: attr('string'),
  // listings: hasMany('listing'),
  // email: attr('string')
});
