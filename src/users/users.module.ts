import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from 'session/entities/session.entity';
import { User } from './entities/user.entity';
import { UsersSubscriber } from './subscribers/users.subscriber';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CommonModule } from 'core/common/common.module';

/**
 * UsersModule is responsible for managing user-related functionalities within the application.
 *
 * It imports necessary modules and provides various components for user management, including:
 * - TypeOrmModule with User and Session entities to enable database operations for user and session management.
 * - CommonModule to handle hashing password and compare password with hashingService.
 *
 * The module declares:
 * - UsersController, which defines the routes and handling of user-related HTTP requests.
 * - UsersService, which contains the business logic for managing users, including CRUD operations and any related processes.
 * - UsersSubscriber, which listens for relevant database events related to users, allowing for actions to be taken in response to changes.
 *
 * Overall, this module encapsulates all functionalities related to user management, ensuring a clean separation of concerns in the application architecture.
 */
@Module({
  imports: [TypeOrmModule.forFeature([User, Session]), CommonModule],
  controllers: [UsersController],
  providers: [UsersService, UsersSubscriber]
})
export class UsersModule {}
