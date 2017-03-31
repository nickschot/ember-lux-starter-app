export default {
  development: {
    driver: 'sqlite3',
    database: 'server_dev'
  },

  test: {
    driver: 'sqlite3',
    database: 'server_test'
  },

  production: {
    driver: 'sqlite3',
    database: 'server_prod'
  }
};
