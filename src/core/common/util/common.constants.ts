import { ValidationPipeOptions } from '@nestjs/common';

/**
 * Configuration object for the validation pipe in a NestJS application.
 * The validation pipe is used to automatically validate incoming requests and
 * transform DTOs (Data Transfer Objects) to the specified types.
 * The options set here enhance the validation and transformation process.
 */
export const VALIDATION_PIPE_OPTIONS: ValidationPipeOptions = {
  /**
   * 'whitelist' option ensures that only properties that are defined in the DTO
   * are allowed in the incoming request. Any properties that are not in the
   * DTO will be stripped from the request object.
   */
  whitelist: true,

  /**
   * 'forbidNonWhitelisted' option throws an error if any non-whitelisted
   * properties are present in the incoming request. This is useful for
   * enforcing strict validation and preventing unexpected data from being processed.
   */
  forbidNonWhitelisted: true,

  /**
   * 'transform' option enables automatic transformation of incoming request
   * data into the specified DTO types. This way, data will be automatically
   * converted to the types defined in the DTO (e.g., string to number).
   */
  transform: true,

  // 'transformOptions' allows for additional settings for the transformation process.
  transformOptions: {
    /**
     * 'enableImplicitConversion' allows for automatic type conversion of properties
     * to their respective types as defined in the DTO. For example, if a property
     * is defined as a number in the DTO, a string representation of that number
     * in the incoming request will be converted to a number automatically.
     */
    enableImplicitConversion: true
  }
};
