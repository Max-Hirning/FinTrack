import { IEntryType } from '../types';
import { Controller, Get } from '@nestjs/common';
import { EntryTypeService } from './module.service';

@Controller('entry-type')
export class EntryTypeController {
  constructor(private readonly moduleService: EntryTypeService) {}

  @Get()
  findAll(): IEntryType[] {
    return this.moduleService.findAll();
  }
}
