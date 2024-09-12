import { SetMetadata } from '@nestjs/common';

/**
 * Defining a constant key for identifying public routes
 */
export const IS_PUBLIC_KEY = 'isPublic';

/**
 * The Public decorator function sets metadata on a route handler to indicate
 * that the route should be treated as public, meaning it does not require authentication.
 * By calling SetMetadata with the IS_PUBLIC_KEY and a value of true,
 * this decorator can be used to easily mark controller methods for public access.
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
