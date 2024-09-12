import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CustomRequest } from 'core/common/interfaces/custom-request.interface';

/**
 * User decorator that extracts user information from the request object.
 * This custom decorator can be used in NestJS route handlers to easily access
 * user data stored in the request object. It leverages the `createParamDecorator`
 * function provided by NestJS to create a parameter decorator that can be used in
 * controller methods.
 * @param data - An optional string parameter that specifies a particular property
 *               of the user object to be returned. If no parameter is provided,
 *               the entire user object will be returned.
 * @param ctx - The execution context that contains the request and response objects.
 * @returns The requested user data if `data` is provided, or the entire user object
 *          if no parameter is specified.
 *
 * Usage in a controller:
 * @Get('profile')
 * getUserProfile(@User() user: CustomUser): CustomUser {
 *   // Do something with the user object
 * }
 * @Get('username')
 * getUsername(@User('username') username: string): string {
 *   // Do something with the username
 * }
 */
export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    // Retrieve the request object from the execution context
    const request = ctx.switchToHttp().getRequest<CustomRequest>();

    // Get the user object from the request
    const user = request.user;

    // Log the user object for debugging purposes
    console.log('user', user);

    // If a specific field is requested, return that field; otherwise, return the whole user object
    return data ? user?.[data] : user;
  }
);
