import { AppService } from './app.service';
import { ITokeResponse } from './auth/types';
import { TokenModuleDto } from './dto/create-module.dto';
import { Controller, Post, Get, Body } from '@nestjs/common';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/token/')
  getNewToken(@Body() tokenModuleDto: TokenModuleDto): Promise<ITokeResponse> {
    return this.appService.getNewToken(tokenModuleDto.refreshToken);
  }
}
