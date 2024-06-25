import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { HashingService } from './hashing.service';

@Injectable()
export class BcryptService implements HashingService {
  async hash(data: string | Buffer, roundsSalt: number = 10) {
    const getSalt = await bcrypt.genSalt(roundsSalt);
    return bcrypt.hash(data, getSalt);
  }

  compare(data: string | Buffer, encrypted: string) {
    return bcrypt.compare(data, encrypted);
  }
}
