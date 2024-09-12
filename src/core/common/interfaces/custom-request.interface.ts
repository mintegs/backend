import { Request } from 'express';
import { Session } from 'session/entities/session.entity';

/**
 * Defining a CustomUser interface to represent a user object.
 * This interface includes a user ID and a session object,
 * allowing for structured user information with session details.
 * @property {string} id - The ID of current user.
 * @property {string} session - The Session object of current user like token, expirationDate, device and IP address.
 */
export interface CustomUser {
  /**
   * The ID of current user
   */
  readonly id: string;

  /**
   * The Session object of current user like token, expirationDate, device and IP address
   */
  readonly session: Session;
}

/**
 * Extending the built-in Request type from Express to create a CustomRequest interface.
 * This interface includes all properties of the standard Request object,
 * with an additional 'user' property that conforms to the CustomUser interface.
 * @property {string} user - The user of the CustomUser.
 * @property {string} version - The version of the device.
 */
export interface CustomRequest extends Request {
  /**
   * The User object is id and session of current user
   */
  readonly user: CustomUser;
}
