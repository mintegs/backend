import { IsPassword } from 'core/common/decorators/validators/is-password.decorator';

export class ChangePasswordDto {
  @IsPassword()
  readonly currentPassword: string;

  @IsPassword()
  readonly newPassword: string;
}
