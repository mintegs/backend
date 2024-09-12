/**
 * This module exports a configuration for JSON Web Token (JWT) settings
 * using NestJS's configuration management system. It utilizes the
 * `registerAs` function to create a named configuration (`'jwt'`),
 * which can be injected elsewhere in the application.
 * The configuration object includes:
 * - `secret`: A secret key for signing the JWT, sourced from the
 *   environment variable `JWT_SECRET_KEY`.
 * - `signOptions`: Options for signing the JWT, including a specified
 *   expiration time of 7 days ('7d').
 * This ensures that the JWT management is centralized and easily
 * configurable, promoting best practices in configuration handling
 * within a NestJS application.
 */
import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export default registerAs('jwt', () => {
  const config = {
    secret: process.env.JWT_SECRET_KEY,
    signOptions: {
      expiresIn: '7d'
    }
  } as const satisfies JwtModuleOptions;

  return config;
});
