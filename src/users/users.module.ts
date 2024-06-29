import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'auth/auth.module';
import { Session } from 'auth/entities/session.entity';
import { User } from './entities/user.entity';
import { UsersSubscriber } from './subscribers/users.subscriber';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Session]), AuthModule],
  controllers: [UsersController],
  providers: [UsersService, UsersSubscriber]
})
export class UsersModule {}
