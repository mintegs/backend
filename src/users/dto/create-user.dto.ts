import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, Length } from 'class-validator';
import { IsPassword } from 'core/common/decorators/validators/is-password.decorator';
import { IsUsername } from 'core/common/decorators/validators/is-username.decorator';
import { UserStatus } from 'core/common/enums/user-status.enum';

/**
 * Data Transfer Object for creating a new user
 */
export class CreateUserDto {
  /**
   * Specifies that 'email' is a required property, must be a valid email format
   */
  @ApiProperty({
    description: 'Get valid email address',
    example: 'test@gmail.com'
  })
  @IsEmail()
  readonly email: string;

  /**
   * Specifies that 'username' is a required property
   * Must adhere to certain formatting and length constraints
   */
  @ApiProperty({
    description:
      'Username lowercase characters, numbers & special characters (_), length between 3 and 30 characters',
    example: 'test_122'
  })
  @IsUsername()
  readonly username: string;

  /**
   * Specifies that 'password' is a required property, with specific content and length requirements
   */
  @ApiProperty({
    description:
      'Password includes numbers, characters, special characters (@#$%^!&*(_+)=) & length between 8 and 20 characters',
    example: 'test@1234'
  })
  @IsPassword()
  readonly password: string;

  /**
   * Optional property 'status' that can take specific enum values defined in UserStatus
   */
  @ApiPropertyOptional({
    enum: UserStatus,
    description: "Possible values are: 'ACTIVATE', 'DEACTIVATE', & 'SUSPEND'",
    example: 'ACTIVATE'
  })
  @IsOptional()
  @IsEnum(UserStatus)
  readonly status?: UserStatus;

  /**
   * Optional 'name' property with a maximum length of 30 characters
   */
  @ApiPropertyOptional({
    description: 'Name limited to a maximum of 30 characters',
    example: 'mohmadreza test'
  })
  @IsOptional()
  @Length(0, 30)
  readonly name?: string;
}
