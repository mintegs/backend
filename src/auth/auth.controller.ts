import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards
} from '@nestjs/common';
import { User as UserEntity } from 'users/entities/user.entity';
import { AuthService } from './auth.service';
import { User } from './decorators/user.decorator';
import { RegisterUserDto } from './dto/register-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@User() user: UserEntity) {
    return this.authService.login(user);
  }
}
