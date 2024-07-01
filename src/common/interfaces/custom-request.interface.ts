import { Session } from 'auth/entities/session.entity';
import { Request } from 'express';

export interface customUser {
  readonly id: string;
  readonly session: Session;
}

export interface CustomRequest extends Request {
  readonly user: customUser;
}
