import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateTables1725986093329 implements MigrationInterface {
    name = 'GenerateTables1725986093329'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "session" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "token" character varying NOT NULL,
                "device" json NOT NULL,
                "ip" character varying NOT NULL,
                "expiryDate" TIMESTAMP NOT NULL,
                "ownerId" uuid NOT NULL,
                CONSTRAINT "UQ_232f8e85d7633bd6ddfad421696" UNIQUE ("token"),
                CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."user_status_enum" AS ENUM('ACTIVATE', 'DEACTIVATE', 'SUSPEND')
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."user_role_enum" AS ENUM('ADMIN', 'USER')
        `);
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying(50),
                "email" character varying NOT NULL,
                "username" character varying(30) NOT NULL,
                "password" character varying NOT NULL,
                "status" "public"."user_status_enum" NOT NULL DEFAULT 'DEACTIVATE',
                "role" "public"."user_role_enum" NOT NULL DEFAULT 'USER',
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deleteAt" TIMESTAMP,
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
                CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "session"
            ADD CONSTRAINT "FK_e1dde0bd0402cc9b1967c40a1b3" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "session" DROP CONSTRAINT "FK_e1dde0bd0402cc9b1967c40a1b3"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."user_role_enum"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."user_status_enum"
        `);
        await queryRunner.query(`
            DROP TABLE "session"
        `);
    }

}
