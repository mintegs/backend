import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import { DataSource } from 'typeorm';

// Load environment variables from a .env file and expand any variables defined in it
dotenvExpand.expand(dotenv.config());

/**
 * Exporting a new instance of DataSource configured for a PostgreSQL database
 */
export default new DataSource({
  // Specifying the type of database being used
  type: 'postgres',

  // Retrieving the database connection URL from the environment variables
  url: process.env.DATA_SOURCE_URL,

  // Defining the path to the entity files, which describe the database tables
  entities: ['dist/**/*.entity{.ts,.js}'],

  // Defining the path to migration files, which handle schema changes
  migrations: ['dist/core/database/migrations/*{.ts,.js}']
});
