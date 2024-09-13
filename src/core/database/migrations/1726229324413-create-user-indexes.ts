import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserIndexes1726229324413 implements MigrationInterface {
  name = 'CreateUserIndexes1726229324413';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TYPE "public"."user_role_enum"
            RENAME TO "user_role_enum_old"
        `);
    await queryRunner.query(`
            CREATE TYPE "public"."user_role_enum" AS ENUM('ADMIN', 'AUTHOR', 'USER')
        `);
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "role" DROP DEFAULT
        `);
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "role" TYPE "public"."user_role_enum" USING "role"::"text"::"public"."user_role_enum"
        `);
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "role"
            SET DEFAULT 'USER'
        `);
    await queryRunner.query(`
            DROP TYPE "public"."user_role_enum_old"
        `);
    await queryRunner.query(`
            CREATE INDEX "IDX_065d4d8f3b5adb4a08841eae3c" ON "user" ("name")
        `);
    await queryRunner.query(`
            CREATE UNIQUE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user" ("email")
        `);
    await queryRunner.query(`
            CREATE UNIQUE INDEX "IDX_78a916df40e02a9deb1c4b75ed" ON "user" ("username")
        `);
    await queryRunner.query(`
            CREATE UNIQUE INDEX "IDX_e11e649824a45d8ed01d597fd9" ON "user" ("createdAt")
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP INDEX "public"."IDX_e11e649824a45d8ed01d597fd9"
        `);
    await queryRunner.query(`
            DROP INDEX "public"."IDX_78a916df40e02a9deb1c4b75ed"
        `);
    await queryRunner.query(`
            DROP INDEX "public"."IDX_e12875dfb3b1d92d7d7c5377e2"
        `);
    await queryRunner.query(`
            DROP INDEX "public"."IDX_065d4d8f3b5adb4a08841eae3c"
        `);
    await queryRunner.query(`
            CREATE TYPE "public"."user_role_enum_old" AS ENUM('ADMIN', 'USER')
        `);
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "role" DROP DEFAULT
        `);
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "role" TYPE "public"."user_role_enum_old" USING "role"::"text"::"public"."user_role_enum_old"
        `);
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "role"
            SET DEFAULT 'USER'
        `);
    await queryRunner.query(`
            DROP TYPE "public"."user_role_enum"
        `);
    await queryRunner.query(`
            ALTER TYPE "public"."user_role_enum_old"
            RENAME TO "user_role_enum"
        `);
  }
}
