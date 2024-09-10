import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CustomRequest } from 'core/common/interfaces/custom-request.interface';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<CustomRequest>();
    const user = request.user;
    console.log('user', user);

    return data ? user?.[data] : user;
  }
);
