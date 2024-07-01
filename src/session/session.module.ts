import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'users/entities/user.entity';
import { Session } from './entities/session.entity';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
@Module({
  imports: [TypeOrmModule.forFeature([User, Session])],
  providers: [SessionService],
  controllers: [SessionController]
})
export class SessionModule {}
