import { Test, TestingModule } from '@nestjs/testing';
import { AutomapperModule } from '@automapper/nestjs';
import { pojos } from '@automapper/pojos';
import { PrismaService } from '../../prisma.service';
import { UsersProfile } from '../users.profile';
import { UsersService } from '../users.service';
import { MockUsersData } from './data/MockUsersData';

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AutomapperModule.forRoot({
          options: [{ name: 'users', pluginInitializer: pojos }],
        }),
      ],
      providers: [UsersService, PrismaService, UsersProfile],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  test('get all users', async () => {
    prisma.user.count = jest.fn().mockReturnValueOnce(MockUsersData.length);
    prisma.user.findMany = jest.fn().mockReturnValueOnce(MockUsersData);

    const findAll = await service.findAll({ page: 1, per_page: 0 });
    expect(findAll.page).toBe(1);
    expect(findAll.per_page).toBe(6);
    expect(findAll.total).toBe(6);
    expect(findAll.total_pages).toBe(1);
    expect(findAll.data.length).toBe(6);
  });

  test('get first page', async () => {
    prisma.user.count = jest.fn().mockReturnValueOnce(MockUsersData.length);
    prisma.user.findMany = jest
      .fn()
      .mockReturnValueOnce(MockUsersData.slice(0, 4));

    const findAll = await service.findAll({ page: 1, per_page: 4 });
    expect(findAll.page).toBe(1);
    expect(findAll.per_page).toBe(4);
    expect(findAll.total).toBe(6);
    expect(findAll.total_pages).toBe(2);
    expect(findAll.data.length).toBe(4);
  });

  test('get second page', async () => {
    prisma.user.count = jest.fn().mockReturnValueOnce(MockUsersData.length);
    prisma.user.findMany = jest
      .fn()
      .mockReturnValueOnce(MockUsersData.slice(4, MockUsersData.length));

    const findAll = await service.findAll({ page: 2, per_page: 4 });
    expect(findAll.page).toBe(2);
    expect(findAll.per_page).toBe(4);
    expect(findAll.total).toBe(6);
    expect(findAll.total_pages).toBe(2);
    expect(findAll.data.length).toBe(2);
  });
});
