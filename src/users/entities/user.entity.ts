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
}
