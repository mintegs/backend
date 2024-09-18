import { Request } from 'express';
import { Session } from 'sessions/entities/session.entity';
import { User } from 'users/entities/user.entity';

/**
 * Defining a CustomUser interface to represent a user object.
 * This interface includes a user ID and a session object,
 * allowing for structured user information with session details.
 * @property {object} data - The data of current user.
 * @property {object} session - The Session object of current user like token, expirationDate, device and IP address.
 */
export interface CustomUser {
  /**
   * The data of current user
   */
  readonly data: User;

  /**
   * The Session object of current user like token, expirationDate, device and IP address
   */
  readonly session: Session;
}

/**
 * Extending the built-in Request type from Express to create a CustomRequest interface.
 * This interface includes all properties of the standard Request object,
 * with an additional 'user' property that conforms to the CustomUser interface.
 * @property {object} user - The user of the CustomUser.
 */
export interface CustomRequest extends Request {
  /**
   * The User object is user data and session data of current user
   */
  readonly user: CustomUser;
}
