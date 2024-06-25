import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'users/entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BcryptService } from './hashing/bcrypt.service';
import { HashingService } from './hashing/hashing.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: HashingService,
      useClass: BcryptService
    }
  ],
  exports: [HashingService]
})
export class AuthModule {}
