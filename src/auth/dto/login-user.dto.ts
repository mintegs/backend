import { IsNotEmpty, IsString } from 'class-validator';
import { IsPassword } from 'core/common/decorators/validators/is-password.decorator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsPassword()
  readonly password: string;
}
