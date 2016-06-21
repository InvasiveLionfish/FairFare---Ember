import Ember from 'ember';

export default Ember.Controller.extend({
  sessionAccount: Ember.inject.service('session-account'),
  isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    updateListing: function(listing, sessionAccount){
      let pickup = this.store.createRecord('pickup', {listing: listing, recipientId: sessionAccount.account.id})
      listing.set('pickup', pickup)
      listing.save().then(()=>{
        window.location.reload(true);
      })
    },
    cancelPickup: function(listing){
      listing.set('pickup', null)
      listing.save().then(()=>{
        window.location.reload(true);
      })
    }
  }
});
