import { HashingProvider } from 'core/common/providers/hashing.provider';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent
} from 'typeorm';
import { User } from 'users/entities/user.entity';

/**
 * Decorator that marks the class as a subscriber for entity events
 */
@EventSubscriber()
export class UsersSubscriber implements EntitySubscriberInterface<User> {
  /**
   * Constructor to initialize the hashing provider
   * @param hashingProvider
   */
  constructor(
    // Injecting HashingProvider for password hashing
    private readonly hashingProvider: HashingProvider
  ) {}

  /**
   * This method specifies the entity that this subscriber listens to
   * @returns User entity
   */
  listenTo() {
    // Listen to User entity events
    return User;
  }

  /**
   * Method to handle actions before a user entity is inserted into the database
   * @param event
   */
  async beforeInsert(event: InsertEvent<User>) {
    // Destructure user entity from the event
    const { entity: user } = event;

    // Hash the user's password before inserting it into the database
    if (user.password) {
      user.password = await this.hashingProvider.hash(user.password);
    }
  }

  /**
   * Method to handle actions before a user entity is updated in the database
   * @param event
   */
  async beforeUpdate(event: UpdateEvent<User>) {
    // Destructure the entity from the event
    const { entity, databaseEntity } = event;

    if (entity.password) {
      // Check if the new plain text password differs from the existing hashed password
      const passwordMatches = await this.hashingProvider.compare(
        entity.password,
        databaseEntity.password
      );

      if (!passwordMatches)
        // Hash the new password before updating it in the database
        entity.password = await this.hashingProvider.hash(entity.password);
    }
  }
}
