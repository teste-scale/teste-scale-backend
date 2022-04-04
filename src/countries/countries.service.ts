import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { CountryDto } from './dto/country.dto';
import { lastValueFrom } from 'rxjs';
import { CountryModel } from './model/country.model';
import { SortHelper } from '..//utils/helpers/sort.helper';

@Injectable()
export class CountriesService {
  private readonly endpoint: string =
    'https://testecountry.free.beeceptor.com/';
  // Api original:
  //'http://www.amock.io/api/fcmaia/countries';

  constructor(
    private httpService: HttpService,
    @InjectMapper('countries') private countriesMapper: Mapper,
  ) {}

  async findAll(): Promise<CountryDto[]> {
    const request = await lastValueFrom(
      this.httpService.get(this.endpoint),
    ).catch(() => {
      throw new HttpException(
        `Erro ao buscar dados na api externa, verifique o endereço: ${this.endpoint} .`,
        HttpStatus.NOT_FOUND,
      );
    });

    const sortData = SortHelper.mergeSort(
      request.data,
      (left: CountryModel, right: CountryModel) => {
        return left.fronteiras.length > right.fronteiras.length;
      },
    );

    return this.countriesMapper.mapArray(sortData, 'CountryDto', 'Country');
  }
}
