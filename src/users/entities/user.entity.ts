import { RegistryDates } from 'common/embedded/registry-dates.embedded';
import { UserRole } from 'common/enums/user-role.enum';
import { UserStatus } from 'common/enums/user-status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50, nullable: true, select: false })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true, length: 30 })
  username: string;

  @Column({ select: false })
  password: string;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.DEACTIVATE })
  status: UserStatus;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Column(() => RegistryDates, { prefix: false })
  registryDates: RegistryDates;

  get isDeleted() {
    return !!this.registryDates.deleteAt;
  }
}
