import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

/**
 * This class defines a Data Transfer Object (DTO) for validating and describing
 * an identifier that adheres to the UUID standard.
 */
export class IdDto {
  /**
   * The 'id' property represents a unique identifier and must be a string
   */
  @ApiProperty({
    description: 'The ID must be string and conforms to the UUID format'
  })

  // Ensures the value is of type string
  @IsString()

  // Enforces that the string is a valid UUID
  @IsUUID()

  // Declare the property as read-only
  readonly id: string;
}
