import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'users/entities/user.entity';
import { Session } from '../session/entities/session.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import jwtConfig from './config/jwt.config';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LoginValidationMiddleware } from './middlewares/login-validation.middleware';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { SessionService } from 'session/session.service';
import { CommonModule } from 'core/common/common.module';
import { UsersService } from 'users/users.service';

/**
 * AuthModule is responsible for all authentication-related functionalities
 */
@Module({
  imports: [
    // Import TypeORM module for User and Session entities
    TypeOrmModule.forFeature([User, Session]),

    // Register JWT module asynchronously using configuration from jwtConfig
    JwtModule.registerAsync(jwtConfig.asProvider()),

    // Import configuration module for environment-specific settings
    ConfigModule.forFeature(jwtConfig),

    CommonModule
  ],
  // Define the controllers related to authentication
  controllers: [AuthController],

  // Providers for authentication services, strategies, and guards
  providers: [
    // Service to handle authenticate user
    AuthService,

    // Service to handle user management
    UsersService,

    // Service to handle user sessions
    SessionService,

    // Strategy for local (username/password) authentication
    LocalStrategy,

    // Strategy for JWT authentication
    JwtStrategy,

    // Apply JwtAuthGuard as a global guard for protecting routes
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})

/**
 * AuthModule implements NestModule, allowing for middleware configuration
 */
export class AuthModule implements NestModule {
  // Configure the middleware for specific routes
  configure(consumer: MiddlewareConsumer) {
    // Apply LoginValidationMiddleware to the 'auth/login' route
    consumer.apply(LoginValidationMiddleware).forRoutes('auth/login');
  }
}
