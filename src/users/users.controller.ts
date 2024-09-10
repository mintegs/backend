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
import { IdDto } from 'common/dto/id.dto';
import { RemoveDto } from 'common/dto/remove.dto';
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

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    description: 'Creates a new user'
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your data is created successfully'
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
    description: 'Get list of users register in application'
  })
  @ApiResponse({
    status: 200,
    description: 'Fetch users successfully'
  })
  findAll() {
    return this.usersService.findAll();
  }

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
    return this.usersService.findOne(id);
  }

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
    return this.usersService.update(id, updateUserDto);
  }

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
    return this.usersService.remove(id, soft);
  }
}
