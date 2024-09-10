import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class IdDto {
  @ApiProperty({
    description: 'The ID of the data thats need to be processed'
  })
  @IsString()
  @IsUUID()
  readonly id: string;
}
