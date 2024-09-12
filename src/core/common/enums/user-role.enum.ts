/**
 * This enum defines the different roles a user can have in the application.
 * - ADMIN: Represents a user with administrative privileges, allowing full access to the system.
 * - AUTHOR: Represents a user who can create and manage content, but with limited permissions compared to an admin.
 * - USER: Represents a regular user with basic access, mainly for viewing content and participating in the application.
 */
export enum UserRole {
  ADMIN = 'ADMIN',
  AUTHOR = 'AUTHOR',
  USER = 'USER'
}
