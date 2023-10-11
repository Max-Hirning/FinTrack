import { Module } from '@nestjs/common';
import { accountSchema } from '../model';
import { userSchema } from '../../user/model';
import { entrySchema } from '../../entry/model';
import { AccountService } from './module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './module.controller';
import { AuthModule } from '../../auth/module/module.module';
import { UserService } from '../../user/module/module.service';

@Module({
  controllers: [AccountController],
  providers: [AccountService, UserService],
  imports: [AuthModule, MongooseModule.forFeature([{ name: 'Accounts', schema: accountSchema }]), MongooseModule.forFeature([{ name: 'Entries', schema: entrySchema }]), MongooseModule.forFeature([{ name: 'Users', schema: userSchema }])],
})
export class AccountModule {}
