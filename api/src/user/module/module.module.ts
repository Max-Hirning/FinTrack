import { userSchema } from '../model';
import { Module } from '@nestjs/common';
import { UserService } from './module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './module.controller';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [MongooseModule.forFeature([{ name: 'Users', schema: userSchema }])],
})
export class UserModule {}
