import * as Joi from 'joi';

/**
 * Defines a validation schema for environment variables using Joi.
 * This schema specifies the required fields for the application to run properly.
 * Each field must meet the specified type requirements:
 */
export const ENV_VALIDATION_SCHEMA = Joi.object({
  // Database username, must be a string and is required.
  DATA_SOURCE_USERNAME: Joi.string().required(),

  // Database password, must be a string and is required.
  DATA_SOURCE_PASSWORD: Joi.string().required(),

  // Host address for the database, must be a string and is required.
  DATA_SOURCE_HOST: Joi.string().required(),

  // Port number for the database connection, must be a number and is required.
  DATA_SOURCE_PORT: Joi.number().required(),

  // Name of the database to connect to, must be a string and is required.
  DATA_SOURCE_DATABASE: Joi.string().required(),

  // Connection URL for the database, must be a string and is required.
  DATA_SOURCE_URL: Joi.string().required(),

  // Secret key for JSON Web Token encryption, must be a string and is required.
  JWT_SECRET_KEY: Joi.string().required(),

  // Current environment (e.g., development, production), must be a string and is required.
  NODE_ENV: Joi.string().required()
});
