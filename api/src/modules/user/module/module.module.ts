import { userSchema } from '../model';
import { Module } from '@nestjs/common';
import { UserService } from './module.service';
import { entrySchema } from '../../entry/model';
import { MongooseModule } from '@nestjs/mongoose';
import { accountSchema } from '../../account/model';
import { UserController } from './module.controller';
import { AuthModule } from '../../auth/module/module.module';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [AuthModule, MongooseModule.forFeature([{ name: 'Users', schema: userSchema }]), MongooseModule.forFeature([{ name: 'Accounts', schema: accountSchema }]), MongooseModule.forFeature([{ name: 'Entries', schema: entrySchema }])],
})
export class UserModule {}
