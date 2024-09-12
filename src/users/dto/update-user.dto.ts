// Import necessary validation decorators and DTOs
import { IsString, IsUUID } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';

/**
 * UpdateUserDto class is a Data Transfer Object (DTO) that
 * extends the CreateUserDto. This class is used for validating
 * and documenting the structure of data sent to the API for updating
 * an existing user.
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {
  /**
   * The ID of the user that needs to be updated.
   * This property is required and should be a valid UUID string.
   * @type {string}
   * @example "dcbec18c-2bdd-4e7b-9f53-8721c3c99ea4"
   */
  @ApiProperty({
    description: 'The ID of the user that needs to be updated.'
  })
  @IsString()
  @IsUUID()
  readonly id: string;
}
