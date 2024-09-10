import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { EnvModule } from './env/env.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [
    CommonModule,
    DatabaseModule,
    EnvModule,
    AuthModule,
    UsersModule,
    SessionModule
  ]
})
export class AppModule {}
