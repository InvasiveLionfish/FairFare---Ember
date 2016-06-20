import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend({
  sessionAccount: service('session-account'),


  model() {
    let listing = this.store.createRecord('listing')
    let donor = this.get('sessionAccount').account
    listing.set('donor', donor)
    return listing
  }
});
