// Update with your config settings.
const { knexSnakeCaseMappers } = require( 'objection')
const { psc_db_host, psc_db_user, psc_db_pass, psc_db_name } = require('../../../../config/dbPaymentStation')
const { app_env } = require('../../../../config/serverConfig')

const mysqlConnection = {
  host: psc_db_host,
  user: psc_db_user,
  password: psc_db_pass,
  database: psc_db_name
}

const development = {
  client: 'mysql2',
  connection: mysqlConnection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  seed: {
    directory: './seeds'
  },
  debug: true,
  ...knexSnakeCaseMappers,
}

const staging = {
  client: 'mysql2',
  connection: mysqlConnection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  ...knexSnakeCaseMappers,
}

const production = {
  client: 'mysql2',
  connection: mysqlConnection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  ...knexSnakeCaseMappers,
}

if(app_env === 'dev') {
  module.exports = development
}

if(app_env === 'staging') {
  module.exports = staging
}

if(app_env === 'prod') {
  module.exports = production
}

