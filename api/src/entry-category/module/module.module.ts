import { Module } from '@nestjs/common';
import { EntryCategoryService } from './module.service';
import { EntryCategoryController } from './module.controller';

@Module({
  providers: [EntryCategoryService],
  controllers: [EntryCategoryController],
})
export class EntryCategoryModule {}
