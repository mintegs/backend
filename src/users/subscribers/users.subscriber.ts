import { HashingService } from 'core/common/hashing/hashing.service';
import {
  DataSource,
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
   * Constructor to initialize the data source and hashing service
   * @param dataSource
   * @param hashingService
   */
  constructor(
    // Injecting DataSource for database operations
    private readonly dataSource: DataSource,

    // Injecting HashingService for password hashing
    private readonly hashingService: HashingService
  ) {
    // Register the subscriber with the data source, allowing it to listen to events
    dataSource.subscribers.push(this);
  }

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
    user.password = await this.hashingService.hash(user.password);
  }

  /**
   * Method to handle actions before a user entity is updated in the database
   * @param event
   */
  async beforeUpdate(event: UpdateEvent<User>) {
    // Destructure the entity from the event
    const { entity } = event;

    // Explicitly cast the entity to User type
    const user = entity as User;

    // Hash the user's password before updating it in the database
    user.password = await this.hashingService.hash(user.password);
  }
}
