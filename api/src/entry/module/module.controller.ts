import { EntryService } from './module.service';
import { IEntry, ISearchEntriesQuery } from '../types';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { JwtAuthGuard } from 'src/auth/module/auth.guard';
import { UseGuards, Query, Controller, Get, Post, Body, Put, HttpException, HttpStatus, Param, Delete } from '@nestjs/common';

@Controller('entry')
@UseGuards(JwtAuthGuard)
export class EntryController {
  constructor(private readonly moduleService: EntryService) {}

  @Post()
  create(@Body() createModuleDto: CreateModuleDto): Promise<string> {
    return this.moduleService.create({ ...createModuleDto, date: (new Date()).toJSON() });
  }

  @Get()
  findAll(@Query() { to, from }: ISearchEntriesQuery) {
    if(to && from) return this.moduleService.findAll({to, from});
    throw new HttpException('Provide necessary data', HttpStatus.BAD_REQUEST);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<IEntry> {
    return this.moduleService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto): Promise<string> {
    return this.moduleService.update(id, updateModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<string> {
    return this.moduleService.remove(id);
  }
}
