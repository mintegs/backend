import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'users/entities/user.entity';
import { Session } from './entities/session.entity';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';

/**
 * Define the SessionModule using the Module decorator
 */
@Module({
  // Specify the entities that should be registered with TypeORM
  imports: [TypeOrmModule.forFeature([User, Session])],
  // Register the SessionService as a provider for dependency injection
  providers: [SessionsService],
  // Register the SessionController to handle incoming requests related to sessions
  controllers: [SessionsController]
})
export class SessionsModule {}
