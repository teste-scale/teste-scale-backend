import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { createMetadataMap } from '@automapper/pojos';
import { CountryModel } from './model/country.model';
import { CountryDto } from './dto/country.dto';

@Injectable()
export class CountriesProfile extends AutomapperProfile {
  constructor(@InjectMapper('countries') mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper) => {
      createMetadataMap<CountryModel>('Country', {
        code: String,
        name: String,
        fronteiras: String,
      });

      createMetadataMap<CountryDto>('CountryDto', {
        code: String,
        name: String,
        fronteiras: String,
      });

      mapper.createMap('Country', 'CountryDto');
    };
  }
}
