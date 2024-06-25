import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @Length(8, 20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,20}$/, {
    message: 'invalid password'
  })
  readonly password: string;
}
