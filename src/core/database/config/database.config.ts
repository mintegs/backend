import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 * Register a configuration for the database using NestJS's configuration module
 */
export default registerAs('database', () => {
  const config = {
    // Specify the database type (PostgreSQL)
    type: 'postgres',

    // Automatically load entities defined in the application
    autoLoadEntities: true,

    // Database connection URL fetched from environment variables
    url: process.env.DATA_SOURCE_URL
  } as const satisfies TypeOrmModuleOptions;

  // Return the database configuration
  return config;
});
