import { Device } from 'core/common/interfaces/device.interface';
import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { User } from 'users/entities/user.entity';

/**
 * Define the Session entity that represents a user session in the application
 */
@Entity()
export class Session {
  /**
   * Generates a unique UUID for each session
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Ensures each token is JWT and unique in the database
   */
  @Column({ unique: true })
  @Index({ unique: true })
  token: string;

  /**
   * Stores device information as a JSON object
   */
  @Column({ type: 'json' })
  device: Device;

  /**
   * IP address of the user during this session
   */
  @Column()
  ip: string;

  /**
   * The date and time when the session will expire
   */
  @Column()
  @Index()
  expiryDate: Date;

  /**
   * This session must be associated with a user
   * The user who owns this session
   */
  @ManyToOne(() => User, (user) => user.id, {
    nullable: false
  })
  owner: User;
}
