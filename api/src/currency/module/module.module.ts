import { Module } from '@nestjs/common';
import { CurrencyService } from './module.service';
import { CurrencyController } from './module.controller';

@Module({
  providers: [CurrencyService],
  controllers: [CurrencyController],
})
export class CurrencyModule {}
