import { applyDecorators } from '@nestjs/common';
import {
  IsBoolean as DefaultIsBoolean,
  ValidationOptions
} from 'class-validator';
import { ToBoolean } from '../transforms/to-boolean.decorator';

/**
 * Checks if the value is a boolean. Works with query params
 */
export const IsBoolean = (validationOptions?: ValidationOptions) =>
  applyDecorators(DefaultIsBoolean(validationOptions), ToBoolean());
