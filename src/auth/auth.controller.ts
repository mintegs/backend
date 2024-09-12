import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards
} from '@nestjs/common';
import { User as UserEntity } from 'users/entities/user.entity';
import { AuthService } from './auth.service';
import { IpAddress } from './decorators/ipAddress.decorator';
import { Public } from './decorators/public.decorator';
import { UserAgent } from './decorators/user-agent.decorator';
import { User } from './decorators/user.decorator';
import { ChangePasswordDto } from './dto/change-password.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { Device } from 'core/common/interfaces/device.interface';

/**
 * AuthController is responsible for handling authentication-related routes in the application
 */
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Register a new user
   * @param registerUserDto
   * @returns User entity
   */
  @Public()
  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  /**
   * Login an existing user
   * @param user User entity
   * @param ip IP address
   * @param device Device is object
   * @returns
   */
  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(
    @User() user: UserEntity,
    @IpAddress() ip: string,
    @UserAgent() device: Device
  ) {
    return this.authService.login(user, ip, device);
  }

  /**
   * Get the user profile
   * @param userId UserID is string and UUID format
   * @returns
   */
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@User('id') userId: string) {
    return this.authService.getProfile(userId);
  }

  /**
   * Change user password
   * @param userId UserID is string and UUID format
   * @param changePasswordDto
   * @returns
   */
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @Post('change-password')
  changePassword(
    @User('id') userId: string,
    @Body() changePasswordDto: ChangePasswordDto
  ) {
    return this.authService.changePassword(userId, changePasswordDto);
  }
}
