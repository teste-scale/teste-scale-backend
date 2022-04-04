import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { createMetadataMap } from '@automapper/pojos';
import { UserDto } from './dto/user.dto';
import { Pagination } from '../pagination/models/pagination.model';
import { PaginationDto } from '../pagination/dto/pagination.dto';

@Injectable()
export class UsersProfile extends AutomapperProfile {
  constructor(@InjectMapper('users') mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper) => {
      createMetadataMap<User>('User', {
        id: Number,
        email: String,
        first_name: String,
        last_name: String,
        avatar: String,
      });

      createMetadataMap<UserDto>('UserDto', {
        id: Number,
        email: String,
        first_name: String,
        last_name: String,
        avatar: String,
      });

      createMetadataMap<Pagination>('UserPagination', {
        page: Number,
        per_page: Number,
        total: Number,
        total_pages: Number,
        data: 'User',
      });

      createMetadataMap<PaginationDto>('UserPaginationDto', {
        page: Number,
        per_page: Number,
        total: Number,
        total_pages: Number,
        data: 'UserDto',
      });

      mapper.createMap('User', 'UserDto');
      mapper.createMap('UserPagination', 'UserPaginationDto');
    };
  }
}
