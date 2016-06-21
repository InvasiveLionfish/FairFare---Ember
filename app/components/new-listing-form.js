import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    submit(){
      let listing = this.get('listing');
      this.attrs.triggerSave(listing);
    },
    return(){
      this.attrs.triggerCancel();
    }
  }
});
