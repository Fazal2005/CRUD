// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://ekbkzdvjxxxxxxxxxxyour_link_herexxxxxxxxxxx'
  },
  test: {
    client: 'pg',
    connection: 'postgres://ekbkzdvjxxxxxxxxxxyour_link_herexxxxxxxxxxx'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};