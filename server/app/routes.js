export default function routes() {
  this.resource('auth', {
    only: []
  }, function () {
    this.post('/token-auth', 'login');
    this.post('/token-refresh', 'tokenRefresh');
    this.post('/change-password', 'changePassword');
  });

  this.resource('users');
}
