import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ENV_VALIDATION_SCHEMA } from './env.constants';

/**
 * Define a new module using the Module decorator
 */
@Module({
  imports: [
    /**
     * Specify the modules to be imported into this module
     * Initialize the ConfigModule with the following configuration options
     */
    ConfigModule.forRoot({
      // Enable the expansion of environment variables (e.g., using ${VAR_NAME})
      expandVariables: true,

      // Use a validation schema to validate environment variables
      validationSchema: ENV_VALIDATION_SCHEMA
    })
  ]
})
export class EnvModule {}
