export default function routes() {
  this.resource('auth', {
    only: []
  }, function () {
    this.post('/token-auth', 'tokenAuth');
    this.post('/token-refresh', 'tokenRefresh');
    this.post('/change-password', 'changePassword');
  });

  this.resource('users');
}
