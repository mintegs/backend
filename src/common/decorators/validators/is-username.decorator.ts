import {
  buildMessage,
  matches,
  ValidateBy,
  ValidationOptions
} from 'class-validator';

const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,30}$/;

const IS_USERNAME_KEY = 'isUsername';

const isUsername = (value: string): boolean => matches(value, usernameRegex);

export const IsUsername = (
  validationOptions?: ValidationOptions
): PropertyDecorator => {
  return ValidateBy({
    name: IS_USERNAME_KEY,
    validator: {
      validate: (value): boolean => isUsername(value),
      defaultMessage: buildMessage(
        (eachPrefix) => eachPrefix + '$property must be valid',
        validationOptions
      )
    }
  });
};
