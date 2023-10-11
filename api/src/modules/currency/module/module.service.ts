import { ICurrency } from '../types';
import { Injectable } from '@nestjs/common';
import currencies from '../../../constants/currencies.json';

@Injectable()
export class CurrencyService {
  findAll(): ICurrency[] {
    return currencies;
  }
}
