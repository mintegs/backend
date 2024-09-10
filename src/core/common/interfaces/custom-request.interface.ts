import { Request } from 'express';
import { Session } from 'session/entities/session.entity';

export interface CustomUser {
  readonly id: string;
  readonly session: Session;
}

export interface CustomRequest extends Request {
  readonly user: CustomUser;
}
