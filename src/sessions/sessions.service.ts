import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomUser } from 'core/common/interfaces/custom-request.interface';
import { Device } from 'core/common/interfaces/device.interface';
import { Session } from 'sessions/entities/session.entity';
import { MoreThan, Repository } from 'typeorm';

/**
 * The SessionService class is marked as Injectable,
 * which allows it to be injected into other components in the application.
 * This service handles session-related operations, such as creating,
 * validating, and retrieving user sessions.
 */
@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>
  ) {}

  /**
   * Creates a new session for a specified user
   * @param userId - The ID of the user
   * @param token - The session token
   * @param ip - The IP address of the user
   * @param device - Information about the user's device
   * @returns The newly created session
   */
  async create(
    userId: string,
    token: string,
    ip: string,
    device: Device
  ): Promise<Session> {
    // Create a new session instance with an expiry date set to 31 days from now
    const session = this.sessionRepository.create({
      owner: { id: userId },
      ip,
      token,
      device,
      expiryDate: new Date(Date.now() + 31 * 24 * 60 * 60 * 1000) // 31 days from now
    });

    // Save the newly created session to the database and return it
    return this.sessionRepository.save(session);
  }

  /**
   * Validates a session based on the user ID and token.
   * @param userId - The ID of the user
   * @param token - The session token
   * @returns The session if valid, or null if not found or expired
   */
  async validate(userId: string, token: string): Promise<Session | null> {
    // Find a session matching the user ID and token, ensuring it has not expired
    return this.sessionRepository.findOne({
      where: {
        token,
        owner: { id: userId },
        expiryDate: MoreThan(new Date()) // Ensure the expiry date is in the future
      }
    });
  }

  /**
   * Retrieves all sessions for a given user.
   * @param user - The user whose sessions are to be retrieved
   * @returns A list of sessions for the user
   */
  async getSessions(customUser: CustomUser): Promise<Session[]> {
    const sessions = await this.sessionRepository.find({
      where: {
        owner: customUser.data
      }
    });

    return sessions;
  }
}
