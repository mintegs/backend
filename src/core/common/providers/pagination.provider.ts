import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from '../dto/pagination-query.dto';
import {
  Repository,
  ObjectLiteral,
  FindOptionsWhere,
  FindOptionsRelations
} from 'typeorm';
import { Paginated } from '../interfaces/paginated.interface';

@Injectable()
export class PaginationProvider {
  /**
   * A lightweight and faster method to paginate query results.
   * Optimized for minimal response overhead.
   *
   * @param paginationQuery Pagination options like `page` and `limit`
   * @param repository The repository to query
   * @param where Optional filtering conditions for the query
   * @param relations Optional relations to be included in the query
   * @param select Optional fields to select in the query
   * @returns Paginated response with minimal metadata for faster performance
   */
  async paginateQuery<T extends ObjectLiteral>(
    paginationQuery: PaginationQueryDto,
    repository: Repository<T>,
    where?: FindOptionsWhere<T> | FindOptionsWhere<T>[],
    relations?: FindOptionsRelations<T>,
    select?: (keyof T)[]
  ): Promise<Paginated<T>> {
    // Set default values for `page` and `limit` if not provided
    const page = paginationQuery.page || 1;
    const limit = paginationQuery.limit || 10;
    const skip = (page - 1) * limit;

    // Create a query builder for more control over the query
    const queryBuilder = repository.createQueryBuilder('entity');

    // Apply filters and relations
    if (where) {
      queryBuilder.where(where);
    }
    if (relations) {
      for (const relation of Object.keys(relations)) {
        queryBuilder.leftJoinAndSelect(`entity.${relation}`, relation);
      }
    }

    // Apply selected fields if provided
    if (select) {
      // Ensure all fields are strings
      const stringFields = select.map((field) => String(field));
      queryBuilder.select([
        'entity.id',
        ...stringFields.map((field) => `entity.${field}`)
      ]);
    }

    // Execute the query with pagination
    const [results, totalItems] = await Promise.all([
      queryBuilder.skip(skip).take(limit).getMany(),
      queryBuilder.getCount()
    ]);

    // Calculate total pages and minimal metadata
    const totalPages = Math.ceil(totalItems / limit);

    // Build the minimal response without unnecessary pagination links
    const response: Paginated<T> = {
      data: results,
      meta: {
        itemsPerPages: limit,
        totalItems,
        currentPage: page,
        totalPages
      }
    };

    return response;
  }
}
