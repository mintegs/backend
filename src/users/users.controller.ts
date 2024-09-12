import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger';
import { IdDto } from 'core/common/dto/id.dto';
import { RemoveDto } from 'core/common/dto/remove.dto';

/**
 * Controller for 'users' route
 * Tags the API endpoints for easier grouping in documentation
 */
@Controller('users')
@ApiTags('users')
export class UsersController {
  /**
   * Inject the UsersService
   * @param usersService
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * Endpoint to create a new user
   * @param createUserDto
   * @returns
   */
  @Post()
  @ApiOperation({
    description: 'Creates a new user'
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your data is created successfully'
  })
  create(@Body() createUserDto: CreateUserDto) {
    /**
     * Receives user data for creation
     * Calls the service method to create a user
     */
    return this.usersService.create(createUserDto);
  }

  /**
   * Endpoint to retrieve all registered users
   * @returns Users list
   */
  @Get()
  @ApiOperation({
    description: 'Get list of users register in application'
  })
  @ApiResponse({
    status: 200,
    description: 'Fetch users successfully'
  })
  findAll() {
    // Calls the service method to get all users
    return this.usersService.findAll();
  }

  /**
   * Endpoint to retrieve a single user by ID
   * @param param0
   * @returns Get object of user
   */
  @Get(':id')
  @ApiOperation({
    description: 'Get single user with id'
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Format of this param is uuid'
  })
  @ApiResponse({
    status: 200,
    description: 'Fetch single user successfully'
  })
  findOne(@Param('id') { id }: IdDto) {
    /**
     * Extracts user ID from the request parameters
     * Calls the service method to find a user by ID
     */
    return this.usersService.findOne(id);
  }

  /**
   * Endpoint to update a user's information
   * @param param0
   * @param updateUserDto
   * @returns
   */
  @Patch(':id')
  @ApiOperation({
    description: 'Update single user with id and send data'
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Format of this param is uuid'
  })
  @ApiResponse({
    status: 200,
    description: 'Update data of user successfully'
  })
  update(@Param('id') { id }: IdDto, @Body() updateUserDto: UpdateUserDto) {
    /**
     * Extracts ID and update data from the request
     * Calls the service method to update user data
     */
    return this.usersService.update(id, updateUserDto);
  }

  /**
   * Endpoint to delete a user by ID
   * @param param0
   * @param param1
   * @returns
   */
  @Delete(':id')
  @ApiOperation({
    description: 'Delete single user with id'
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'Format of this param is uuid'
  })
  @ApiQuery({
    name: 'soft',
    type: Boolean,
    required: false,
    description: 'This query for soft delete data of user in application'
  })
  @ApiResponse({
    status: 200,
    description: 'Delete user successfully'
  })
  remove(@Param('id') { id }: IdDto, @Query() { soft }: RemoveDto) {
    /**
     * Extracts ID and soft delete flag from the request
     * Calls the service method to remove the user
     */
    return this.usersService.remove(id, soft);
  }
}
