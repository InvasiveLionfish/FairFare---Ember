import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    let controller = this.controllerFor(this.routeName);
    controller.set('errorMessage', null);
  }
});
