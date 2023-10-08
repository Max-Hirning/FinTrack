import { UserService } from './module.service';
import { UpdateModuleDto } from './dto/update-module.dto';
import { JwtAuthGuard } from "../../auth/module/auth.guard";
import { UseGuards, Controller, Get, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly moduleService: UserService) {}

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
