import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

/**
 * A class representing common date fields for an entity in the database.
 * This class uses TypeORM decorators to automatically manage
 * the creation, update, and deletion dates of the entity.
 */
export class RegistryDates {
  /**
   * The date and time when the entity was created.
   * This field is automatically populated by TypeORM upon entity creation.
   */
  @CreateDateColumn()
  createdAt: Date;

  /**
   * The date and time when the entity was last updated.
   * This field is automatically updated by TypeORM whenever the entity is modified.
   */
  @UpdateDateColumn()
  updatedAt: Date;

  /**
   * The date and time when the entity was soft deleted.
   * This field is automatically populated when the entity is marked as deleted,
   * allowing for soft deletion functionality without removing the record from the database.
   */
  @DeleteDateColumn()
  deleteAt: Date;
}
