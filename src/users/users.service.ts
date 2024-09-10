import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

/**
 * Class to connect to Users table and preform business operations
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
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
   * Find a single user using the ID of the user
   */
  async findOne(id: string) {
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
   * Find and Delete a single user using the ID of user
   */
  async remove(id: string, soft: boolean) {
    const user = await this.findOne(id);
    return soft
      ? await this.userRepository.softRemove(user)
      : await this.userRepository.remove(user);
  }
}
