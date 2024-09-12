import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SessionService } from 'session/session.service';
import { User } from 'users/entities/user.entity';
import { RegisterUserDto } from './dto/register-user.dto';
import { HashingService } from '../core/common/hashing/hashing.service';
import { Device } from 'core/common/interfaces/device.interface';
import { JwtPayload } from 'core/common/interfaces/jwt-payload.interface';
import { CustomUser } from 'core/common/interfaces/custom-request.interface';
import { UsersService } from 'users/users.service';
import { UserChangePasswordDto } from 'core/common/dto/user-change-password.dto';

/**
 * AuthService is a service responsible for all authentication-related functionalities
 * in the application, including user registration, login, profile retrieval
 * and JWT validation. It utilizes various services and
 * repositories provided by NestJS and TypeORM to interact with the database
 * and manage user sessions.
 */
@Injectable()
export class AuthService {
  /**
   * Injecting dependencies using constructor injection
   * @param userService UserService for user management
   * @param sessionService SessionService for managing user sessions
   * @param jwtService JwtService for generating JWT tokens
   */
  constructor(
    private readonly userService: UsersService,
    // Injecting the HashingService for password hashing
    private readonly hashingService: HashingService,
    // Injecting the SessionService for managing user sessions
    private readonly sessionService: SessionService,
    // Injecting the JwtService for generating JWT tokens
    private readonly jwtService: JwtService
  ) {}

  /**
   * Registers a new user ***
   * @param registerUserDto
   * @returns Object of user data
   */
  async register(registerUserDto: RegisterUserDto) {
    try {
      // Creates a new user and saves to database from the RegisterUserDto
      return await this.userService.create({ ...registerUserDto });
    } catch (error) {
      // Rethrows any error that occurs during registration
      throw error;
    }
  }

  /**
   * Login user and generates a JWT token
   * @param user
   * @param ip
   * @param device
   * @returns Object of user and JWT token
   */
  async login(user: User, ip: string, device: Device) {
    // Creates a payload for the JWT token, containing the user's ID
    const payload = { id: user.id };

    // Generates a JWT token using the JwtService
    const token = this.jwtService.sign(payload);

    // Creates a new session for the user, storing the token, IP address, and device information
    await this.sessionService.create(user.id, token, ip, device);

    // Returns the user data and the JWT token
    return {
      ...user,
      token: this.jwtService.sign(payload)
    };
  }

  /**
   * Registers a new user ****
   * @param id The ID is string and UUID format
   * @returns Object of user data
   */
  async getProfile(id: string) {
    // Finds the user by their ID
    const user = await this.userService.findOneById(id);

    // Removes the ID from the user object, as it's not needed in the profile
    delete user.id;

    // Returns the user's profile data
    return user;
  }

  /**
   * Changes a user's password
   * @param id
   * @param userChangePasswordDto
   */
  async changePassword(
    id: string,
    userChangePasswordDto: UserChangePasswordDto
  ) {
    try {
      return await this.userService.updatePassword(id, userChangePasswordDto);
    } catch (error) {
      // Rethrows any error that occurs during changePassword
      throw error;
    }
  }

  /**
   * Validates a user's credentials using email or username and password ***
   * @param email
   * @param password
   * @returns Object of user data
   */
  async validateLocal(email: string, password: string) {
    // Finds the user by their email or username, retrieving specific fields
    const user = await this.userService.findOne(
      [{ email }, { username: email }],
      ['id', 'role', 'status', 'password']
    );

    // Throws a NotFoundException if the user is not found
    if (!user) throw new NotFoundException('User not found');

    // // Checks if the user's account is activated (this part is commented out, but it could be used to implement user account activation)
    // if (user.status !== UserStatus.ACTIVATE)
    //   throw new UnauthorizedException(
    //     `Your account is ${user.status.toLowerCase()} see support for reviewing your account`
    //   );

    // Compares the provided password with the stored password hash
    const isMatch = await this.hashingService.compare(password, user.password);

    // Throws an UnauthorizedException if the password is invalid
    if (!isMatch) throw new UnauthorizedException('invalid password');

    // Removes the password from the user object, as it's not needed for authentication
    delete user.password;

    // Returns the user information without the password
    return user;
  }

  /**
   * Validates a JWT token and retrieves the user information ***
   * @param param0
   * @param jwtToken
   * @returns UserId and object of session
   */
  async validateJwt({ id }: JwtPayload, jwtToken: string) {
    // Finds the user by their ID
    const user = await this.userService.findOneById(id);

    // Throws an UnauthorizedException if the user is not found
    if (!user) throw new UnauthorizedException();

    // Validates the JWT token and checks if the session is still active
    const session = await this.sessionService.validate(user.id, jwtToken);

    // Throws an UnauthorizedException if the session is invalid
    if (!session) throw new UnauthorizedException();

    // Creates a CustomUser object containing the user's ID and the session information
    const res: CustomUser = { id, session };

    // Returns the CustomUser object
    return res;
  }
}
