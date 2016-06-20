import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate: function(credentials) {
      var authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
        this.set('errorMessage', reason.responseJSON.errors || reason);
      }).then(()=>{
        this.transitionToRoute('listings');
      });
    }
  }
});
