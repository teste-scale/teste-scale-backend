import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../prisma.service';
import { UsersProfile } from './users.profile';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UsersProfile],
})
export class UsersModule {}
