import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  queryParams: ['type'],
  type: null,
  actions: {
    save(user){
      let userType = this.get('type')
      user.set('type', userType)
      user.save().then(()=>{
        var credentials = {identification: user.get('email'), password: user.get('password')},
          authenticator = 'authenticator:jwt';

        this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
          this.set('errorMessage', reason.error || reason);
        }).then(()=>{
          this.transitionToRoute('listings');
        });
      }).catch((adapterError) => {
        if (adapterError.errors) {
          this.set('errorMessage', adapterError.errors);
        }
      });
    }
  }
});
