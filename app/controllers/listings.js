import Ember from 'ember';

export default Ember.Controller.extend({
  sessionAccount: Ember.inject.service('session-account'),
  isShowingModal: false,
  query: null,
  displayListings: Ember.computed.reads('model'),
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    updateListing: function(listing){
      listing.save().then(()=>{
        window.location.reload(true);
      })
    }
  }
});
