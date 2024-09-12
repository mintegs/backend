import {
  buildMessage,
  matches,
  ValidateBy,
  ValidationOptions
} from 'class-validator';

/**
 * Regular expression for validating a password.
 * The password must contain:
 * - At least one lowercase letter
 * - At least one uppercase letter
 * - At least one special character from the specified set (@$!%*?&)
 * - Length between 8 to 20 characters
 */
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,20}$/;

/**
 * A unique key identifier for the custom password validator
 */
const IS_PASSWORD_KEY = 'isPassword';

/**
 * A helper function that checks if the given value matches the password regex
 * @param value string
 * @returns boolean
 */
const isPassword = (value: string): boolean => matches(value, passwordRegex);

/**
 * Custom decorator function for validating passwords on class properties.
 * It utilizes the 'class-validator' library to create a validation rule for password strength.
 * It takes an optional validationOptions parameter for customizing error messages.
 * @param validationOptions
 */
export const IsPassword = (
  validationOptions?: ValidationOptions
): PropertyDecorator => {
  return ValidateBy({
    name: IS_PASSWORD_KEY, // Name of the custom validation rule
    validator: {
      // Implementation of the validation logic, using the isPassword helper
      validate: (value): boolean => isPassword(value),
      // Custom default error message returned when validation fails
      defaultMessage: buildMessage(
        (eachPrefix) => eachPrefix + '$property must be valid',
        validationOptions
      )
    }
  });
};
