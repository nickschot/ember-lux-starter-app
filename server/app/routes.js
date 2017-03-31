export default function routes() {
  this.resource('auth', {
    only: []
  }, function () {
    this.post('/login', 'login');
    this.post('/token-refresh', 'tokenRefresh');
    this.post('/change-password', 'changePassword');
  });

  this.resource('users');
}
