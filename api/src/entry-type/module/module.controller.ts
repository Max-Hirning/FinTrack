import { Controller, Get } from '@nestjs/common';
import { EntryTypeService } from './module.service';

@Controller('entry-type')
export class EntryTypeController {
  constructor(private readonly moduleService: EntryTypeService) {}

  @Get()
  findAll() {
    return this.moduleService.findAll();
  }
}
