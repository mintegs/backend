import { applyDecorators } from '@nestjs/common';
import {
  IsBoolean as DefaultIsBoolean,
  ValidationOptions
} from 'class-validator';
import { ToBoolean } from '../transforms/to-boolean.decorator';

/**
 * Create a custom decorator 'IsBoolean' that combines the default class-validator
 * 'IsBoolean' validation with a custom transformation decorator 'ToBoolean'.
 * This allows for both validation of boolean values and automatic conversion
 * of input values into booleans before validation occurs.
 */
export const IsBoolean = (validationOptions?: ValidationOptions) =>
  applyDecorators(DefaultIsBoolean(validationOptions), ToBoolean());
