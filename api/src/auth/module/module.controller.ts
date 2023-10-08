import bcrypt from 'bcrypt';
import { ITokeResponse } from '../types';
import { AuthService } from './module.service';
import { SignInModuleDto, SignUpModuleDto } from './dto/create-module.dto';
import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly moduleService: AuthService) {}

  @Post('/sign-up/')
  async signUp(@Body() signUpModuleDto: SignUpModuleDto): Promise<string> {
    try {
      await this.moduleService.validateUser(signUpModuleDto.email);
      const password = await bcrypt.hash(signUpModuleDto.password, 5);
      signUpModuleDto.password = password;
      return this.moduleService.signUp(signUpModuleDto);
    } catch (error) {
      console.error(error);
    }
  }

  @Post('/sign-in/')
  async signIn(@Body() signInModuleDto: SignInModuleDto): Promise<ITokeResponse> {
    try {
      const user = await this.moduleService.findByEmail(signInModuleDto.email);
      const isPassValid = await bcrypt.compareSync(signInModuleDto.password, user.password);
      if (isPassValid) return this.moduleService.signIn(user);
      throw new HttpException('Incorrect password', HttpStatus.BAD_REQUEST);
    } catch (error) {
      console.error(error);
    }
  }
}
