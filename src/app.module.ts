import { Module } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';
import { pojos } from '@automapper/pojos';
import { UsersModule } from './users/users.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [
    UsersModule,
    AutomapperModule.forRoot({
      options: [
        { name: 'users', pluginInitializer: pojos },
        { name: 'countries', pluginInitializer: pojos },
      ],
    }),
    CountriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
