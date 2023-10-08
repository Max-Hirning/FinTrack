import { userSchema } from '../model';
import { Module } from '@nestjs/common';
import { UserService } from './module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './module.controller';
import { AuthModule } from 'src/auth/module/module.module';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [AuthModule, MongooseModule.forFeature([{ name: 'Users', schema: userSchema }])],
})
export class UserModule {}
