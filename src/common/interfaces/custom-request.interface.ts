import { Request } from 'express';
import { User } from 'users/entities/user.entity';

export interface CustomRequest extends Request {
  readonly user: User;
}
