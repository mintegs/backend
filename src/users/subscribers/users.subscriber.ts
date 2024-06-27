import { HashingService } from 'auth/hashing/hashing.service';
import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent
} from 'typeorm';
import { User } from 'users/entities/user.entity';

@EventSubscriber()
export class UsersSubscriber implements EntitySubscriberInterface<User> {
  constructor(
    private readonly dataSource: DataSource,
    private readonly hashingService: HashingService
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  async beforeInsert(event: InsertEvent<User>) {
    const { entity: user } = event;
    user.password = await this.hashingService.hash(user.password);
  }

  async beforeUpdate(event: UpdateEvent<User>) {
    const { entity } = event;
    const user = entity as User;

    user.password = await this.hashingService.hash(user.password);
  }
}
