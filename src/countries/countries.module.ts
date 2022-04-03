import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { CountriesProfile } from './countries.profile';

@Module({
  imports: [HttpModule],
  controllers: [CountriesController],
  providers: [CountriesService, CountriesProfile],
})
export class CountriesModule {}
