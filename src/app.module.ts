import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SessionModule } from './session/session.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule, AuthModule, UsersModule, SessionModule]
})
export class AppModule {}
