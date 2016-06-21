import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openRegistrationModal: function(){
      return this.send('openModal');
    }
  },
  classNames: ["homepage"]
});
