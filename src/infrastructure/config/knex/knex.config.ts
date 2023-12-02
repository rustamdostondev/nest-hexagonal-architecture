import * as Knex from 'knex';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';

export const KnexConfig = (config: EnvironmentConfigService) =>
  Knex({
    client: 'pg', // Replace with your database client (e.g., mysql, sqlite3)
    connection: {
      host: config.getDatabaseHost(),
      user: config.getDatabaseUser(),
      password: config.getDatabasePassword(),
      database: config.getDatabaseName(),
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/db/migrations', // Set the path to your migrations folder
    },
    seeds: {
      directory: './src/db/seeds', // Set the path to your seeds folder
    },
    // Add other configurations as needed
  });
