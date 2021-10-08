import knex from 'knex'

const config = {
  postgres: {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'matomaten',
    post: 5433
  }
}

export const db = knex({
  client: 'pg',
  connection: {
    host: config.postgres.host,
    user: config.postgres.user,
    password: config.postgres.password,
    database: config.postgres.database,
    port: config.postgres.port,
    timezone: 'UTC',
    dateStrings: true,
  },
})