import Ember from 'ember';

export default Ember.Controller.extend({
  sessionAccount: Ember.inject.service('session-account'),
  isShowingModal: false,
  query: null,
  displayListings: Ember.computed('model', 'query', function(){
    const query = this.get('query');
    const model = this.get('model');
    if (!query){
      return model;
    } else {
      model.forEach((listing) => {
        const match = `${listing.get('description')} ${listing.get('donor.name')}`;
        const score = match.score(query);
        listing.set('_score', score);
      });
      return model.filterBy('_score').sortBy('_score').reverse();
    }
  }),
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    updateListing: function(listing, sessionAccount){
      let pickup = this.store.createRecord('pickup', {listing: listing})
      listing.set('pickup', pickup)
      listing.save().then(()=>{
        window.location.reload(true);
        alert("Awesome! Your pickup is confirmed. We'll inform the donor.")
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
