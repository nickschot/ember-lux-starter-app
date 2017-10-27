import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  session: service('session'),

  errorMessage: "",

  identification: null,
  password: null,
  rememberMe: false,

  actions: {
    authenticateWithJWT() {
      let { identification, password, rememberMe } = this.getProperties('identification', 'password', 'rememberMe');

      this.get('session')
        .authenticate('authenticator:jwt', {
          identification: identification,
          password: password,
          rememberMe: rememberMe
        })
        .catch((reason) => {
          this.set('errorMessage', `${reason.errors[0].status} ${reason.errors[0].title}`);
        });
    }
  }
});
