import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { EnvModule } from './env/env.module';

/**
 * The CoreModule is a central module for the application,
 * responsible for importing and aggregating other key modules.
 * It serves as a foundation for the application's functionality
 * by encapsulating and organizing related modules, promoting
 * a modular architecture where features can be easily managed and maintained.
 */
@Module({
  // Importing essential modules that provide common functionalities,
  // database access, and environment configuration.
  imports: [CommonModule, DatabaseModule, EnvModule]
})
export class CoreModule {}
