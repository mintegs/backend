import { IsString, IsUUID } from 'class-validator';

export class IdDto {
  @IsString()
  @IsUUID()
  readonly id: string;
}
