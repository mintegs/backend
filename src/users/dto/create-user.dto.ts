import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, Length } from 'class-validator';
import { IsPassword } from 'core/common/decorators/validators/is-password.decorator';
import { IsUsername } from 'core/common/decorators/validators/is-username.decorator';
import { UserStatus } from 'core/common/enums/user-status.enum';

export class CreateUserDto {
  @ApiProperty({
    description: 'Get valid email address',
    example: 'test@gmail.com'
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description:
      'Username lowercase charters, numbers & spacial charter just _ & between 3 and 30 charters',
    example: 'test_122'
  })
  @IsUsername()
  readonly username: string;

  @ApiProperty({
    description:
      'Password include numbers,charters, spacial charters like: @#$%^!&*(_+)= & between 8 and 20 charters',
    example: 'test@1234'
  })
  @IsPassword()
  readonly password: string;

  @ApiPropertyOptional({
    enum: UserStatus,
    description: "Possible values is: 'ACTIVATE', 'DEACTIVATE' & 'SUSPEND'",
    example: 'ACTIVATE'
  })
  @IsOptional()
  @IsEnum(UserStatus)
  readonly status: UserStatus;

  @ApiPropertyOptional({
    description: 'Name between 0 and 30 charters',
    example: 'mohmadreza test'
  })
  @IsOptional()
  @Length(0, 30)
  readonly name: string;
}
