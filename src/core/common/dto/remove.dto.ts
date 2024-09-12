import { IsOptional } from 'class-validator';
import { IsBoolean } from '../decorators/validators/is-boolean.decorator';
import { ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Define a Data Transfer Object (DTO) class for removing resources
 */
export class RemoveDto {
  /**
   * Define a property 'soft' that is optional and of type boolean
   */
  @ApiPropertyOptional({
    description: 'The "soft" property is optional and has type boolean'
  })

  // Indicate that the 'soft' property is optional in the request
  @IsOptional()

  // Validate that the 'soft' property, if provided, must be a boolean value
  @IsBoolean()

  // Declare the property as read-only
  readonly soft: boolean;
}
