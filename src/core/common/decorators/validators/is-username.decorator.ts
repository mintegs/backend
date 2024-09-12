import {
  buildMessage,
  matches,
  ValidateBy,
  ValidationOptions
} from 'class-validator';

/**
 * Define a regular expression for validating usernames
 * Username must:
 * - Not contain two consecutive dots
 * - Not end with a dot
 * - Start with a word character (not a special character)
 * - Have a length between 4 to 30 characters
 */
const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,30}$/;

/**
 * Key to identify the custom validation rule
 */
const IS_USERNAME_KEY = 'isUsername';

/**
 * Function to determine if a value matches the username regex
 * @param value string
 * @returns boolean
 */
const isUsername = (value: string): boolean => matches(value, usernameRegex);

/**
 * Custom validation decorator for username validation
 * @param validationOptions
 */
export const IsUsername = (
  validationOptions?: ValidationOptions // Optional object for additional validation options
): PropertyDecorator => {
  return ValidateBy({
    // Name of the validation rule
    name: IS_USERNAME_KEY,

    // Validator object containing the validation logic
    validator: {
      // Validation function that returns true if value is a valid username
      validate: (value): boolean => isUsername(value),

      // Default error message if validation fails
      defaultMessage: buildMessage(
        // Custom message format, indicating which property failed validation
        (eachPrefix) => eachPrefix + '$property must be valid',
        validationOptions
      )
    }
  });
};
