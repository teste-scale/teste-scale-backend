import { Test, TestingModule } from '@nestjs/testing';
import { AutomapperModule } from '@automapper/nestjs';
import { pojos } from '@automapper/pojos';
import { CountriesProfile } from '../countries.profile';
import { CountriesService } from '../countries.service';
import { HttpService, HttpModule } from '@nestjs/axios';
import { mockCountriesData } from './data/MockCountriesData';
import { of } from 'rxjs';
import { CountryDto } from '../dto/country.dto';

describe('CountriesService', () => {
  let service: CountriesService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AutomapperModule.forRoot({
          options: [{ name: 'countries', pluginInitializer: pojos }],
        }),
        HttpModule,
      ],
      providers: [CountriesService, CountriesProfile],
    }).compile();

    service = module.get<CountriesService>(CountriesService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('sort data', async () => {
    jest.spyOn(httpService, 'get').mockImplementationOnce(() =>
      of({
        data: mockCountriesData,
        headers: {},
        config: { url: '' },
        status: 200,
        statusText: '',
      }),
    );

    const findAll = await service.findAll();
    expect(findAll.length).toEqual(mockCountriesData.length);

    const listMergeSort = findAll.map(
      (country: CountryDto) => country.fronteiras.length,
    );
    const listSort = mockCountriesData
      .map((country: CountryDto) => country.fronteiras.length)
      .sort((a, b) => a - b);
    expect(listMergeSort).toEqual(listSort);
  });
});
