import {
  BadRequestException,
  Injectable,
  NestMiddleware
} from '@nestjs/common';
import { LoginUserDto } from 'auth/dto/login-user.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

/**
 * Define a middleware class for validating login user data
 */
@Injectable()
export class LoginValidationMiddleware implements NestMiddleware {
  /**
   * Middleware function to handle incoming requests
   * @param req Express request
   * @param res Express response
   * @param next Express next
   * @returns If validation is successful next request or validation errors are found throw a BadRequestException with the error details
   */
  async use(req: Request, res: Response, next: NextFunction) {
    // Convert the request body to a LoginUserDto instance
    const loginDto = plainToInstance(LoginUserDto, req.body);

    // Validate the loginDto using class-validator
    // - whitelist: true enforces only the properties defined in the DTO
    // - forbidNonWhitelisted: true rejects any properties not defined in the DTO
    const errors = await validate(loginDto, {
      whitelist: true,
      forbidNonWhitelisted: true
    });

    // If validation errors are found, throw a BadRequestException with the error details
    if (errors.length) {
      throw new BadRequestException(errors);
    }

    // If validation is successful, proceed to the next middleware or route handler
    next();
  }
}
