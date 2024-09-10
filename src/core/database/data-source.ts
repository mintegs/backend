import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import { DataSource } from 'typeorm';

dotenvExpand.expand(dotenv.config());

export default new DataSource({
  type: 'postgres',
  url: process.env.DATA_SOURCE_URL,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/core/database/migrations/*{.ts,.js}']
});
