import { userSchema } from '../model';
import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleController } from './module.controller';

@Module({
  providers: [ModuleService],
  controllers: [ModuleController],
  imports: [MongooseModule.forFeature([{ name: 'Users', schema: userSchema }])],
})
export class ModuleModule {}
