import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { PrismaService } from '../prisma.service';
import { Pagination } from '../pagination/models/pagination.model';
import { PaginationDto } from '../pagination/dto/pagination.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    @InjectMapper('users') private usersMapper: Mapper,
  ) {}

  async findAll(params: {
    page: number;
    per_page: number;
  }): Promise<PaginationDto> {
    const skip = (params.page - 1) * params.per_page;
    const take = params.per_page > 0 ? params.per_page : undefined;

    const count = await this.prisma.user.count();
    const users = await this.prisma.user.findMany({
      skip,
      take,
    });

    const pagination = new Pagination(
      params.page,
      params.per_page,
      count,
      users,
    );

    return this.usersMapper.map(
      pagination,
      'UserPaginationDto',
      'UserPagination',
    );
  }
}
