// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/pokemon'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

  seeds: {
  directory: './seeds'
}

};
