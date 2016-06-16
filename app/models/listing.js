import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo} from 'ember-data/relationships';

export default Model.extend({
  pickupTime: attr('date'),
  description: attr('string'),
  donor: belongsTo('donor')
});
