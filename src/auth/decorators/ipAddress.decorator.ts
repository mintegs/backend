import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CustomRequest } from 'common/interfaces/custom-request.interface';

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
