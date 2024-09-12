import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomUser } from 'core/common/interfaces/custom-request.interface';
import { Device } from 'core/common/interfaces/device.interface';
import { Session } from 'sessions/entities/session.entity';
import { DataSource, Raw, Repository } from 'typeorm';
import { User } from 'users/entities/user.entity';

/**
 * The SessionService class is marked as Injectable,
 * which allows it to be injected into other components in the application.
 * This service handles session-related operations, such as creating,
 * validating, and retrieving user sessions.
 */
@Injectable()
export class SessionsService {
  /**
   * @param dataSource DataSource instance for accessing the database
   * @param sessionRepository The Session repository for CRUD operations on Session entities
   * @param userRepository The User repository to access User entities
   */
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  /**
   * Creates a new session for a specified user
   * @param userId
   * @param token
   * @param ip
   * @param device
   * @returns New session
   */
  async create(userId: string, token: string, ip: string, device: Device) {
    /**
     * Creates a new session instance with the provided user ID, token, IP address, device information,
     * and sets the expiry date to 31 days from now
     */
    const session = this.sessionRepository.create({
      owner: {
        id: userId
      },
      ip,
      token,
      device,
      expiryDate: new Date(new Date().setMilliseconds(31 * 24 * 60 * 60 * 1000))
    });

    // Saves the newly created session to the database and returns it.
    return await this.sessionRepository.save(session);
  }

  /**
   * Validates a session based on the user ID and token.
   * @param userId
   * @param token
   * @returns Object of session
   */
  async validate(userId: string, token: string): Promise<Session> {
    /**
     * Finds a session that matches the user ID and token,
     * and checks if the session has not expired by comparing the expiry date with the current date.
     */
    const session = await this.dataSource.getRepository(Session).findOne({
      where: {
        token,
        owner: {
          id: userId
        },
        // Ensures the expiry date is in the future.
        expiryDate: Raw((alias) => `${alias} > NOW()`)
      }
    });

    // Returns the found session or null if not found or expired.
    return session;
  }

  /**
   * Retrieves sessions for a given user****
   * @param param0
   * @returns Session lists
   */
  async sessions({ id }: CustomUser) {
    /**
     * Fetches a user by ID along with their related sessions
     */
    await this.userRepository.findOne({
      where: { id },
      // Specifies that related sessions should be fetched.
      relations: ['session']
    });
  }
}
