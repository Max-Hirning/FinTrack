import bcrypt from 'bcrypt';
import { ModuleService } from './module.service';
import { UpdateModuleDto } from './dto/update-module.dto';
import { SignUpModuleDto, SignInModuleDto } from './dto/create-module.dto';
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('user')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Post('/sign-up/')
  async signUp(@Body() signUpModuleDto: SignUpModuleDto) {
    const user = await this.moduleService.findByEmail(signUpModuleDto.email);
    if (user) throw new Error('Such user already exists');
    const password = await bcrypt.hash(signUpModuleDto.password, 5);
    signUpModuleDto.password = password;

    return this.moduleService.signUp(signUpModuleDto);
  }

  @Post('/sign-in/')
  async signIn(@Body() signInModuleDto: SignInModuleDto) {
    const user = await this.moduleService.findByEmail(signInModuleDto.email);
    const isPassValid = await bcrypt.compareSync(signInModuleDto.password, user.password);
    if (isPassValid) return this.moduleService.signIn(user._id);
    throw new Error('Incorrect password');
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
