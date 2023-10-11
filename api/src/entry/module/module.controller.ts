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
    try {
      return this.moduleService.create({ ...createModuleDto, date: (new Date()).toJSON() });
    } catch (error) {
      console.error(error);
    }
  }

  @Get()
  findAll(@Query() { to, from }: ISearchEntriesQuery) {
    try {
      if(to && from) return this.moduleService.findAll({to, from});
      throw new HttpException('Provide necessary data', HttpStatus.BAD_REQUEST);
    } catch (error) {
      console.error(error);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<IEntry> {
    try {
      return this.moduleService.findOne(id);
    } catch (error) {
      console.error(error);
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto): Promise<string> {
    try {
      return this.moduleService.update(id, updateModuleDto);
    } catch (error) {
      console.error(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<string> {
    try {
      return this.moduleService.remove(id);
    } catch (error) {
      console.error(error);
    }
  }
}
