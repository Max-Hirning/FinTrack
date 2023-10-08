import { ICategory } from '../types';
import { Controller, Get } from '@nestjs/common';
import { EntryCategoryService } from './module.service';

@Controller('entry-category')
export class EntryCategoryController {
  constructor(private readonly moduleService: EntryCategoryService) {}

  @Get()
  findAll(): ICategory[] {
    return this.moduleService.findAll();
  }
}
