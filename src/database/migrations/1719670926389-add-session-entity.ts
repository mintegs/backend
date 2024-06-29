import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSessionEntity1719670926389 implements MigrationInterface {
    name = 'AddSessionEntity1719670926389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "session" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "token" character varying NOT NULL,
                "device" character varying NOT NULL,
                "ip" character varying NOT NULL,
                "expiryDate" TIMESTAMP NOT NULL,
                CONSTRAINT "UQ_232f8e85d7633bd6ddfad421696" UNIQUE ("token"),
                CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "session"
        `);
    }

}
