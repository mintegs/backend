// Import necessary modules and decorators from NestJS and other dependencies
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from 'auth/auth.service';
import jwtConfig from 'auth/config/jwt.config'; // Import the JWT configuration
import { JwtPayload } from 'core/common/interfaces/jwt-payload.interface'; // Define the interface for JWT payload
import { Request } from 'express'; // Import Request type from Express
import { ExtractJwt, Strategy } from 'passport-jwt'; // Import JWT extraction and strategy from passport-jwt

/**
 * JwtStrategy class is responsible for validating JWTs using Passport.
 * It extends Passport's Strategy class for JWTs and overrides the
 * validation method to integrate with the application's authentication service.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * Constructor for JwtStrategy.
   * @param jwtConfiguration - Configuration object for JWT containing secret and other settings.
   * @param authService - Instance of AuthService to delegate JWT validation logic.
   */
  constructor(
    @Inject(jwtConfig.KEY) // Inject the JWT configuration using the key defined in jwtConfig
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>, // Retrieve configuration type for jwtConfig
    private readonly authService: AuthService // Injecting the AuthService for validation
  ) {
    // Call the parent constructor with options for extracting JWT and using the secret
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extracts JWT from Authorization header as Bearer token
      secretOrKey: jwtConfiguration.secret, // Uses the secret defined in JWT configuration for verification
      passReqToCallback: true // Enable passing the request object to the validation callback
    });
  }

  /**
   * Validate method to handle the verification of the JWT.
   * @param req - Incoming request object, used to access headers and other request-specific data.
   * @param payload - The decoded payload of the JWT, containing user information.
   * @returns The user object if validation is successful; otherwise, it throws an error.
   */
  validate(req: Request, payload: JwtPayload) {
    // Calls the AuthService to validate the token payload and possibly retrieve user info
    return this.authService.validateJwt(
      payload,
      req.headers?.authorization.replace('bearer ', '')
    );
  }
}
