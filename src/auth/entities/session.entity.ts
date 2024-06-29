import { Device } from 'common/interfaces/device.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  token: string;

  @Column({ type: 'json' })
  device: Device;

  @Column()
  ip: string;

  @Column()
  expiryDate: Date;

  // @ManyToOne(() => User, (user) => user.id, {
  //   nullable: false
  // })
  // owner: User;
}
