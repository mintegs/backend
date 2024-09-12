import { Injectable } from '@nestjs/common';

/**
 * The HashingService class is defined as an abstract service in NestJS.
 * It provides an interface for hashing and comparing hashed data,
 * which can be implemented by any concrete class that requires
 * cryptographic hashing functionality.
 */
@Injectable()
export abstract class HashingService {
  /**
   * The hash method is an abstract method that takes data as a string or Buffer
   * @param data
   * @returns returns a Promise that resolves to a hashed string
   */
  abstract hash(data: string | Buffer): Promise<string>;

  /**
   * The compare method is an abstract method that takes raw data
   * and an encrypted string, returning a Promise that resolves to a
   * boolean indicating whether the raw data matches the hashed data.
   * @param data
   * @param encrypted
   * @returns returns a Promise that resolves to a boolean
   */
  abstract compare(data: string | Buffer, encrypted: string): Promise<boolean>;
}
