import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';

/**
 * DatabaseModule is a NestJS module responsible for setting up
 * the database connection using TypeORM.
 *
 * It imports the TypeOrmModule with a configuration provided
 * asynchronously. The configuration options, such as the database
 * type, host, username, password, and others, are defined in
 * the databaseConfig module.
 *
 * This setup allows for better flexibility and management of
 * database connection settings, making it easier to adapt to
 * different environments (e.g., development, testing, production).
 */
@Module({
  imports: [TypeOrmModule.forRootAsync(databaseConfig.asProvider())]
})
export class DatabaseModule {}
