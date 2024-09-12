import { RegistryDates } from 'core/common/embedded/registry-dates.embedded';
import { UserRole } from 'core/common/enums/user-role.enum';
import { UserStatus } from 'core/common/enums/user-status.enum';
import { Session } from 'session/entities/session.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Define the User entity representing a user in the system
 */
@Entity()
export class User {
  /**
   * Generates a unique identifier for each user
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * User's name, optional and not selected by default
   */
  @Column({ length: 50, nullable: true, select: false })
  name: string;

  /**
   * User's email must be unique
   */
  @Column({ unique: true })
  email: string;

  /**
   * Username has a maximum length of 30 and must be unique
   */
  @Column({ unique: true, length: 30 })
  username: string;

  /**
   * Password is not selected by default (for security)
   */
  @Column({ select: false })
  password: string;

  /**
   * User status, defaults to DEACTIVATE
   */
  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.DEACTIVATE })
  status: UserStatus;

  /**
   * User role defaults to USER
   */
  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  /**
   * Embedded class for registry dates (createdAt, updatedAt, deletedAt)
   */
  @Column(() => RegistryDates, { prefix: false })
  registryDates: RegistryDates;

  /**
   * Defines a one-to-many relation with the Session entity
   */
  @OneToMany(() => Session, (session) => session.owner, {
    /**
     * Allows sessions to be softly removed or recovered
     */
    cascade: ['soft-remove', 'recover']
  })
  sessions: Session[];

  /**
   * Getter to determine if the user is considered deleted based on the deletion date
   */
  get isDeleted() {
    /**
     * Returns true if deleteAt is set (indicating the user is deleted)
     */
    return !!this.registryDates.deleteAt;
  }
}
