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
  imports: [
    AuthModule, 
    MongooseModule.forFeature([{ name: 'Users', schema: userSchema }]),
    MongooseModule.forFeature([{ name: 'Entries', schema: entrySchema }]), 
    MongooseModule.forFeature([{ name: 'Accounts', schema: accountSchema }]), 
  ],
  providers: [
    UserService,
    AccountService, 
  ],
  controllers: [
    AccountController
  ],
})
export class AccountModule {}
