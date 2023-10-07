import { Controller, Get } from '@nestjs/common';
import { EntryCategoryService } from './module.service';

@Controller('entry-category')
export class EntryCategoryController {
  constructor(private readonly moduleService: EntryCategoryService) {}

  @Get()
  findAll() {
    return this.moduleService.findAll();
  }
}
