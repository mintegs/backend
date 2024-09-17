import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FindOptionsSelect,
  FindOptionsSelectByString,
  FindOptionsWhere,
  Repository
} from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserChangePasswordDto } from '../core/common/dto/user-change-password.dto';
import { HashingService } from 'core/common/hashing/hashing.service';

/**
 * Class to connect to Users table and preform business operations
 */
@Injectable()
export class UsersService {
  /**
   * Constructor for the class, which injects the User repository.
   * The @InjectRepository(User) decorator is used to get an instance of the
   * User repository from the dependency injection container. This allows
   * the class to interact with the database using the userRepository
   * instance, enabling operations such as creating, retrieving,
   * updating, or deleting User entities.
   * @param userRepository - An instance of the Repository<User> that provides
   * access to user-related database operations.
   * @param hashingService HashingService for password hashing and compare password
   */
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    // Injecting the HashingService for password hashing
    private readonly hashingService: HashingService
  ) {}

  /**
   * The method to create a new user in the database
   */
  async create(createUserDto: CreateUserDto) {
    try {
      // Create user
      const user = await this.userRepository.create({
        ...createUserDto
      });

      // Save and return it
      return await this.userRepository.save(user);
    } catch (error) {
      throw error;
    }
  }

  /**
   * The method to get all users from the database
   */
  async findAll() {
    return await this.userRepository.find();
  }

  /**
   * Find a single user using Where and Select query
   */
  async findOne(
    where: FindOptionsWhere<User> | FindOptionsWhere<User>[],
    select: FindOptionsSelect<User> | FindOptionsSelectByString<User> = [
      'id',
      'email',
      'name',
      'password',
      'registryDates',
      'role',
      'status',
      'username'
    ]
  ) {
    // Find user
    const user = await this.userRepository.findOne({ where, select });

    // If doesn't exists, throw error
    if (!user) throw new NotFoundException('user not found');

    // Otherwise return user
    return user;
  }

  /**
   * Find a single user using the ID of the user
   */
  async findOneById(id: string) {
    // Find user with id
    const user = await this.userRepository.findOneBy({ id });

    // If doesn't exists, throw error
    if (!user) throw new NotFoundException('user not found');

    // Otherwise return user
    return user;
  }

  /**
   * Find and Update a single user using the ID of user
   */
  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      // Find user with id and update data
      const user = await this.userRepository.preload({
        id,
        ...updateUserDto
      });

      // If doesn't exists, throw error
      if (!user) {
        throw new NotFoundException('user not found');
      }

      // Otherwise save and return user
      return await this.userRepository.save(user);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update user's password
   * @param id
   * @param UserChangePasswordDto
   */
  async updatePassword(
    id: string,
    { currentPassword, newPassword }: UserChangePasswordDto
  ) {
    // Finds the user by their ID, only retrieving the password
    const user = await this.userRepository.findOne({
      where: { id },
      select: ['password']
    });

    /**
     * Compares the provided current password with the stored password hash using the HashingService
     */
    const isMatch = await this.hashingService.compare(
      currentPassword,
      user.password
    );

    // Throws an UnauthorizedException if the current password is invalid
    if (!isMatch) throw new UnauthorizedException('invalid password');

    // If the new password is different from the current password, updates the user's password in the database
    await this.userRepository.update(id, { password: newPassword });
  }

  /**
   * Find and Delete a single user using the ID of user
   */
  async remove(id: string, soft: boolean) {
    const user = await this.findOneById(id);
    return soft
      ? await this.userRepository.softRemove(user)
      : await this.userRepository.remove(user);
  }
}
