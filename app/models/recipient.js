import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import User from "./user"

export default User.extend({
  pickups: hasMany('pickup')
});
