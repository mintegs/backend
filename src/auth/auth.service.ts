import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'users/entities/user.entity';
import { JwtPayload } from './../common/interfaces/jwt-payload.interface';
import { RegisterUserDto } from './dto/register-user.dto';
import { HashingService } from './hashing/hashing.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly hashingService: HashingService,
    private readonly jwtService: JwtService
  ) {}

  async register(registerUserDto: RegisterUserDto) {
    try {
      // Create user
      const user = await this.userRepository.create({
        ...registerUserDto
      });

      // Save and return it
      return await this.userRepository.save(user);
    } catch (error) {
      throw error;
    }
  }

  login(user: User) {
    const payload = { id: user.id };
    return {
      ...user,
      token: this.jwtService.sign(payload)
    };
  }

  async getProfile(id: string) {
    // Find user
    const user = await this.userRepository.findOneBy({ id });

    // Remove id form user object and return it
    delete user.id;
    return user;
  }

  async validateLocal(email: string, password: string) {
    // Find user with email or username
    const user = await this.userRepository.findOne({
      where: [{ email }, { username: email }],
      select: ['id', 'role', 'status', 'password']
    });

    // If doesn't exists, handle it
    if (!user) throw new NotFoundException('User not found');

    // Check user status
    // if (user.status !== UserStatus.ACTIVATE)
    //   throw new UnauthorizedException(
    //     `Your account is ${user.status.toLowerCase()} see support for reviewing your account`
    //   );

    // Check valid password
    const isMatch = await this.hashingService.compare(password, user.password);

    // If invalid password, handle it
    if (!isMatch) throw new UnauthorizedException('invalid password');

    // Return user without password
    delete user.password;
    return user;
  }

  async validateJwt({ id }: JwtPayload) {
    // Find user with id
    const user = await this.userRepository.findOneBy({ id });

    // If doesn't exists, handle it
    if (!user) throw new UnauthorizedException();

    // return Jwt payload
    const res: JwtPayload = { id };

    return res;
  }
}
