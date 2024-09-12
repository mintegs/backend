/**
 * Represents a device with a specific name and an optional version.
 * The `name` property is mandatory and should uniquely identify the device,
 * while the `version` property is optional, allowing for flexibility in cases
 * where the device may not have a specific version to report.
 * @property {string} name - The name of the device.
 * @property {string} version - The version of the device
 */
export interface Device {
  /**
   * The name of the device (e.g., "iPhone", "Android Tablet")
   * a string that specifies the name of the device
   */
  readonly name: string;

  /**
   * The version of the device and this is optional property, if applicable (e.g., "1.0", "2.1.5")
   */
  readonly version?: string | undefined;
}
