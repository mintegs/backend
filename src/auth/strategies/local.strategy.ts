// Import necessary modules from NestJS and Passport library
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from 'auth/auth.service';
import { Strategy } from 'passport-local';

/**
 * The LocalStrategy class is a Passport strategy for authenticating users based on email and password.
 * It extends the PassportStrategy class, which allows integration of the Passport local strategy within a NestJS application.
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  /**
   * The constructor takes in an AuthService instance, which contains methods for validating user credentials.
   * It also calls the super constructor of PassportStrategy with options to use 'email' as the field for the username.
   * @param authService
   */
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  /**
   * The validate method is called by Passport after the user submits their credentials.
   * It invokes the AuthService's validateLocal method to check if the provided email and password are valid.
   * If authentication is successful, it should return the user object; otherwise, it will throw an error.
   * @param email
   * @param password
   * @returns promise user object
   */
  validate(email: string, password: string) {
    return this.authService.validateLocal(email, password);
  }
}
