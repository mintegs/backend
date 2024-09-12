import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from 'auth/decorators/public.decorator';

/**
 * JwtAuthGuard is a custom authentication guard that extends the default
 * AuthGuard provided by the NestJS Passport module. This guard is used
 * to protect routes that require JWT authentication, while also allowing
 * for certain routes to be marked as public (i.e., accessible without
 * authentication).
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  /**
   * Call the constructor of the parent AuthGuard class.
   * @param reflector
   */
  constructor(private readonly reflector: Reflector) {
    super();
  }

  /**
   * Determines if the current request should be allowed through based
   * on the authentication logic. It checks if the route is marked as
   * public using the Reflector to access metadata.
   * @param context - The ExecutionContext provides the context of the
   * request, including the handler and the class where the route is
   * defined.
   * @returns true if the route is public or if the default authentication
   * logic passes; otherwise, it returns false.
   */
  canActivate(context: ExecutionContext) {
    // Use the Reflector to check if the current route is marked as public.
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(), // Get the method (handler) level metadata.
      context.getClass() // Get the class level metadata.
    ]);

    // If the route is public, allow the request without authentication.
    if (isPublic) return true;

    // Otherwise, proceed with the normal authentication process.
    return super.canActivate(context);
  }
}
