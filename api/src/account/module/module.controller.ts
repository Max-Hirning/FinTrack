import { AccountService } from './module.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { JwtAuthGuard } from 'src/auth/module/auth.guard';
import { UpdateModuleDto } from './dto/update-module.dto';
import { UseGuards, Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('account')
@UseGuards(JwtAuthGuard)
export class AccountController {
  constructor(private readonly moduleService: AccountService) {}

  @Post(':ownerId')
  create(@Param('ownerId') ownerId: string, @Body() createModuleDto: CreateModuleDto) {
    try {
      return this.moduleService.create({ ...createModuleDto, ownerId });
    } catch (error) {
      console.error(error);
    }
  }

  @Get('/owner/:id')
  findAll(@Param('id') id: string) {
    try {
      return this.moduleService.findAllByOwner(id);
    } catch (error) {
      console.error(error);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.moduleService.findOne(id);
    } catch (error) {
      console.error(error);
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto) {
    try {
      return this.moduleService.update(id, updateModuleDto);
    } catch (error) {
      console.error(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.moduleService.remove(id);
    } catch (error) {
      console.error(error);
    }
  }
}
