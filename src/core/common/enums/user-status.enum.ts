/**
 * Define an enumeration for user status in the application
 * - ACTIVATE: Represents a user who is currently active and has access to the system
 * - DEACTIVATE: Represents a user who has been deactivated and no longer has access to the system
 * - SUSPEND: Represents a user whose access is temporarily suspended, possibly due to violations or other reasons
 */
export enum UserStatus {
  ACTIVATE = 'ACTIVATE',
  DEACTIVATE = 'DEACTIVATE',
  SUSPEND = 'SUSPEND'
}
