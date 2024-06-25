import { IsEmail } from 'class-validator';
import { IsPassword } from 'common/decorators/validators/is-password.decorator';
import { IsUsername } from 'common/decorators/validators/is-username.decorator';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @IsUsername()
  readonly username: string;

  @IsPassword()
  readonly password: string;
}
