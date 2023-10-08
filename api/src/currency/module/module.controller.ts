import { ICurrency } from '../types';
import { Controller, Get } from '@nestjs/common';
import { CurrencyService } from './module.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly moduleService: CurrencyService) {}

  @Get()
  findAll(): ICurrency[] {
    return this.moduleService.findAll();
  }
}
