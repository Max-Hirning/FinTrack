import { AccountService } from './module.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { JwtAuthGuard } from '../../auth/module/guards/auth.guard';
import { UseGuards, Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('account')
@UseGuards(JwtAuthGuard)
export class AccountController {
  constructor(private readonly moduleService: AccountService) {}

  @Post(':ownerId')
  create(@Param('ownerId') ownerId: string, @Body() createModuleDto: CreateModuleDto) {
    return this.moduleService.create({ ...createModuleDto, ownerId });
  }

  @Get('/owner/:id')
  findAll(@Param('id') id: string) {
    return this.moduleService.findAllByOwner(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moduleService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto) {
    return this.moduleService.update(id, updateModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moduleService.remove(id);
  }
}
