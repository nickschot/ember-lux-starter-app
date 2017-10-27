import { isEmpty } from '@ember/utils';
import { Promise as EmberPromise } from 'rsvp';
import Service, { inject as service } from '@ember/service';

export default Service.extend({
  session:  service('session'),
  store:    service(),

  user: null,

  loadCurrentUser() {
    return new EmberPromise((resolve, reject) => {
      const userId = this.get('session.data.authenticated.userId');

      if (!isEmpty(userId)) {
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
