import Ember from 'ember';

export default Ember.Service.extend({
  session:  Ember.inject.service('session'),
  store:    Ember.inject.service(),

  user: null,

  loadCurrentUser() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      console.log('AUTH DATA: ', this.get('session.data.authenticated'));
      const userId = this.get('session.data.authenticated.userId');

      console.log('ID FROM TOKEN: ',userId);

      if (!Ember.isEmpty(userId)) {
        this.get('store').find('user', userId)
          .then((user) => {
            this.set('user', user);
            resolve();
          }, reject);
      } else {
        resolve();
      }
    });
  }
});
