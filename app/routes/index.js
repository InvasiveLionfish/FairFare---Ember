import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  actions: {
    openRegistrationModal: function(){
      return this.send('openModal');
    }
  },
  classNames: ["homepage"]
});
