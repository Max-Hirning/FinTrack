import { IReturnedUser } from '../types';
import { UserService } from './module.service';
import { UpdateModuleDto } from './dto/update-module.dto';
import { JwtAuthGuard } from '../../auth/module/guards/auth.guard';
import { UseGuards, Controller, Get, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly moduleService: UserService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<IReturnedUser> {
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
