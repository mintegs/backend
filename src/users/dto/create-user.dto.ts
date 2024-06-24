import { IsEmail, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @Length(3, 30)
  @Matches(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{1,}$/, {
    message: 'invalid username'
  })
  readonly username: string;

  @Length(8, 20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,20}$/, {
    message: 'invalid password'
  })
  readonly password: string;
}
