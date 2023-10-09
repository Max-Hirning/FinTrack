import { userSchema } from '../model';
import { Module } from '@nestjs/common';
import { entrySchema } from 'src/entry/model';
import { UserService } from './module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { accountSchema } from 'src/account/model';
import { UserController } from './module.controller';
import { AuthModule } from 'src/auth/module/module.module';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [AuthModule, MongooseModule.forFeature([{ name: 'Users', schema: userSchema }]), MongooseModule.forFeature([{ name: 'Accounts', schema: accountSchema }]), MongooseModule.forFeature([{ name: 'Entries', schema: entrySchema }])],
})
export class UserModule {}
