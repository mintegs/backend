import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from 'auth/entities/session.entity';
import { Device } from 'common/interfaces/device.interface';
import { DataSource, Raw, Repository } from 'typeorm';

@Injectable()
export class SessionService {
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>
  ) {}

  async create(userId: string, token: string, ip: string, device: Device) {
    const session = this.sessionRepository.create({
      owner: {
        id: userId
      },
      ip,
      token,
      device,
      expiryDate: new Date(new Date().setMilliseconds(31 * 24 * 60 * 60 * 1000))
    });

    return await this.sessionRepository.save(session);
  }

  async validate(userId: string, token: string): Promise<Session> {
    const session = await this.dataSource.getRepository(Session).findOne({
      where: {
        token,
        owner: {
          id: userId
        },
        expiryDate: Raw((alias) => `${alias} > NOW()`)
      }
    });

    return session;
  }
}
