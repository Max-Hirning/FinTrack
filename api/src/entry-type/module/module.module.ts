import { Module } from '@nestjs/common';
import { EntryTypeService } from './module.service';
import { EntryTypeController } from './module.controller';

@Module({
  providers: [EntryTypeService],
  controllers: [EntryTypeController],
})
export class EntryTypeModule {}
