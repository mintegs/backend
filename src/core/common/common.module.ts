import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { VALIDATION_PIPE_OPTIONS } from './util/common.constants';
import { HashingService } from './hashing/hashing.service';
import { BcryptService } from './hashing/bcrypt.service';

/**
 * Define a module called CommonModule
 * Provide a global validation pipe for the application, which is injected into the NestJS application context
 * Use a new instance of ValidationPipe with custom options defined in VALIDATION_PIPE_OPTIONS
 */
@Module({
  providers: [
    {
      // Use BcryptService as the implementation of HashingService
      provide: HashingService,
      useClass: BcryptService
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe(VALIDATION_PIPE_OPTIONS)
    }
  ],
  // Export the HashingService for use in other modules
  exports: [HashingService]
})
export class CommonModule {}
