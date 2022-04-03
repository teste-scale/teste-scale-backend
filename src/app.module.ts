import { Module } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';
import { pojos } from '@automapper/pojos';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    AutomapperModule.forRoot({
      options: [{ name: 'users', pluginInitializer: pojos }],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
