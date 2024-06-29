import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeTypeDeviceToSession1719671348989 implements MigrationInterface {
    name = 'ChangeTypeDeviceToSession1719671348989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "session" DROP COLUMN "device"
        `);
        await queryRunner.query(`
            ALTER TABLE "session"
            ADD "device" json NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "session" DROP COLUMN "device"
        `);
        await queryRunner.query(`
            ALTER TABLE "session"
            ADD "device" character varying NOT NULL
        `);
    }

}
