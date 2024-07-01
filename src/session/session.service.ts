import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomUser } from 'common/interfaces/custom-request.interface';
import { Device } from 'common/interfaces/device.interface';
import { Session } from 'session/entities/session.entity';
import { DataSource, Raw, Repository } from 'typeorm';
import { User } from 'users/entities/user.entity';

@Injectable()
export class SessionService {
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
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

  async sessions({ id }: CustomUser) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['session']
    });
  }
}
