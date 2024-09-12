/**
 * This interface represents the structure of a JWT (JSON Web Token) payload.
 * It contains a single property 'id', which is a string that uniquely identifies
 * the user or entity associated with the token. The 'readonly' modifier ensures
 * that the 'id' cannot be modified after it has been set, promoting immutability
 * and helping to maintain the integrity of the JWT payload.
 * @property {string} id - The ID of user is string and UUID format.
 */
export interface JwtPayload {
  /**
   * The ID of user is string and UUID format
   */
  readonly id: string;
}
