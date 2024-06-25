import { IsEmail, Length, Matches } from 'class-validator';
import { IsPassword } from 'common/decorators/validators/is-password.decorator';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @Length(3, 30)
  @Matches(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{1,}$/, {
    message: 'invalid username'
  })
  readonly username: string;

  @IsPassword()
  readonly password: string;
}
