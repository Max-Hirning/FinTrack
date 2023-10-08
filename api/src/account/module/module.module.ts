import { Module } from '@nestjs/common';
import { accountSchema } from '../model';
import { AccountService } from './module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './module.controller';
import { AuthModule } from 'src/auth/module/module.module';

@Module({
  providers: [AccountService],
  controllers: [AccountController],
  imports: [AuthModule, MongooseModule.forFeature([{ name: 'Accounts', schema: accountSchema }])],
})
export class AccountModule {}
