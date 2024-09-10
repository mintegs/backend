import { IsEmail } from 'class-validator';
import { IsPassword } from 'core/common/decorators/validators/is-password.decorator';
import { IsUsername } from 'core/common/decorators/validators/is-username.decorator';

export class RegisterUserDto {
  @IsEmail()
  readonly email: string;

  @IsUsername()
  readonly username: string;

  @IsPassword()
  readonly password: string;
}
