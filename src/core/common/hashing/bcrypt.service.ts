import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { HashingService } from './hashing.service';

/**
 * BcryptService is a class responsible for hashing and comparing passwords using the bcrypt algorithm.
 * The Injectable decorator allows NestJS to manage the lifecycle of the service.
 */
@Injectable()
export class BcryptService implements HashingService {
  /**
   * Method to hash a given data (string or Buffer) with a specified number of salt rounds (default is 10).
   * @param data
   * @param roundsSalt
   * @returns stringHash
   */
  async hash(data: string | Buffer, roundsSalt: number = 10) {
    // Generate a salt with the specified number of rounds.
    const getSalt = await bcrypt.genSalt(roundsSalt);

    // Return the hashed data using the generated salt.
    return bcrypt.hash(data, getSalt);
  }

  /**
   * Method to compare a plain text data with an encrypted hash.
   * Returns a boolean indicating whether the data matches the encrypted hash.
   * @param data
   * @param encrypted
   * @returns boolean
   */
  compare(data: string | Buffer, encrypted: string) {
    return bcrypt.compare(data, encrypted);
  }
}
