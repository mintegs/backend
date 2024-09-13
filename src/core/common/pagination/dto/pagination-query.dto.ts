import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  readonly limit?: number = 1;

  @IsOptional()
  @IsPositive()
  readonly page?: number = 1;
}
