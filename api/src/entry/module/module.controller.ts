import { IEntry } from '../types';
import { EntryService } from './module.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { JwtAuthGuard } from 'src/auth/module/auth.guard';
import { UseGuards, Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('entry')
@UseGuards(JwtAuthGuard)
export class EntryController {
  constructor(private readonly moduleService: EntryService) {}

  @Post()
  create(@Body() createModuleDto: CreateModuleDto): Promise<string> {
    try {
      return this.moduleService.create({ ...createModuleDto, ammount: +createModuleDto.ammount, date: (new Date()).toJSON() });
    } catch (error) {
      console.error(error);
    }
  }

  @Get()
  findAll() {
    try {
      return this.moduleService.findAll();
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
