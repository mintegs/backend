import { Transform } from 'class-transformer';

/**
 * A utility function that converts various input values to a boolean type.
 * The function returns either a boolean (true or false), a string 'failure', or the original value based on the input.
 */
const toBoolean = (value: unknown) => {
  // Using switch statement to handle different input cases.
  switch (value) {
    // If the input value is null, return 'failure'.
    case null:
      return 'failure';

    // When the input value is the string 'true', return a boolean true.
    case 'true':
      return true;

    // When the input value is the string 'false', return a boolean false.
    case 'false':
      return false;

    // For any other value, return the value unchanged.
    default:
      return value;
  }
};

/**
 * A decorator function `ToBoolean` that applies the custom transformation logic to class properties.
 * This decorator uses the Transform decorator to map the relevant property value to its boolean representation
 * using the `toBoolean` function. It extracts the value from the object using the given key.
 */
export const ToBoolean = () => Transform(({ obj, key }) => toBoolean(obj[key]));
