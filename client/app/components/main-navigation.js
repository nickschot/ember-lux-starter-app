import Ember from 'ember';

export default Ember.Component.extend({
  session:        Ember.inject.service('session'),
  sessionAccount: Ember.inject.service('session-account'),

  actions: {
    login() {
      this.sendAction('onLogin');
    },

    logout() {
      this.get('session').invalidate();
    }
  }
});
