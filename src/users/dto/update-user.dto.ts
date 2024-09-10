import { IsString, IsUUID } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'The ID of the user thats need to be Updated'
  })
  @IsString()
  @IsUUID()
  readonly id: string;
}
