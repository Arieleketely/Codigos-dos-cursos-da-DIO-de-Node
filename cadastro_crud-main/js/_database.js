const pg = require('pg')
//usando drive pg
const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})

module.exports = client
