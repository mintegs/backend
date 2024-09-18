import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { VALIDATION_PIPE_OPTIONS } from './util/common.constants';
import { HashingProvider } from './providers/hashing.provider';
import { BcryptProvider } from './providers/bcrypt.provider';

/**
 * Define a module called CommonModule
 * Provide a global validation pipe for the application, which is injected into the NestJS application context
 * Use a new instance of ValidationPipe with custom options defined in VALIDATION_PIPE_OPTIONS
 */
@Module({
  providers: [
    {
      // Use BcryptProvider as the implementation of HashingProvider
      provide: HashingProvider,
      useClass: BcryptProvider
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe(VALIDATION_PIPE_OPTIONS)
    }
  ],
  // Export the HashingService for use in other modules
  exports: [HashingProvider]
})
export class CommonModule {}
