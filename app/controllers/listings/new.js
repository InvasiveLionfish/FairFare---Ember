import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    save(listing){
      listing.save().then(()=>{
        debugger;
      })
    }
  }
});
