import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CustomRequest } from 'core/common/interfaces/custom-request.interface';

/**
 * IpAddress is a custom parameter decorator for use in NestJS controllers.
 * It extracts the client's IP address from the request object. The decorator will primarily
 * be used to inject the IP address into controller methods as a parameter.
 * The decorator performs the following operations:
 * 1. It uses the `ExecutionContext` to access the HTTP request object.
 * 2. It attempts to read the IP address from the 'x-forwarded-for' header, which is typically
 *    used in a proxied environment (like behind a load balancer).
 * 3. If the application is running in a production environment and the 'x-forwarded-for' header
 *    is present, it splits the header value (which may contain multiple IPs) and keeps the first one,
 *    ensuring that any extra spaces or commas are removed.
 * 4. If no valid IP address is found, it defaults to returning '127.0.0.1', which is the localhost address.
 * @param data - Optional parameter that could be used to pass additional information,
 * but is currently unused in this decorator.
 * @param ctx - The execution context that provides access to the request and response objects.
 * @returns The extracted IP address or the default localhost address.
 */
export const IpAddress = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<CustomRequest>();

    // Get ip address
    const ip = request.headers['x-forwarded-for'] as string;

    if (ip && process.env.NODE_ENV === 'production') {
      ip.split(',')[0].replace(',', '');
    }

    // Set ip address
    return ip ?? '127.0.0.1';
  }
);
