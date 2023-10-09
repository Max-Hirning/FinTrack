import { entrySchema } from '../model';
import { Module } from '@nestjs/common';
import { EntryService } from './module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EntryController } from './module.controller';
import { AuthModule } from 'src/auth/module/module.module';
import { accountSchema } from 'src/account/model';

@Module({
  providers: [EntryService],
  controllers: [EntryController],
  imports: [AuthModule, MongooseModule.forFeature([{ name: 'Entries', schema: entrySchema }]), MongooseModule.forFeature([{ name: 'Accounts', schema: accountSchema }])],
})
export class EntryModule {}
