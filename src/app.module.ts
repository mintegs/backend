import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SessionsModule } from './sessions/sessions.module';
import { CoreModule } from './core/core.module';

/**
 * AppModule serves as the root module for the application.
 * It imports several feature modules, including:
 * - CoreModule: Contains shared resources and services used across the app.
 * - AuthModule: Manages authentication logic and user session management.
 * - UsersModule: Handles user-related operations and data management.
 * - SessionModule: Manages user sessions and related functionalities.
 *
 * This module is the main entry point for the application and orchestrates
 * the integration of various features.
 */
@Module({
  imports: [CoreModule, AuthModule, UsersModule, SessionsModule]
})
export class AppModule {}
