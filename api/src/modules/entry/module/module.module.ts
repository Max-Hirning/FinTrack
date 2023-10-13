import { entrySchema } from '../model';
import { Module } from '@nestjs/common';
import { EntryService } from './module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { accountSchema } from '../../account/model';
import { EntryController } from './module.controller';
import { AuthModule } from '../../auth/module/module.module';

@Module({
  imports: [
    AuthModule, 
    MongooseModule.forFeature([{ name: 'Entries', schema: entrySchema }]), 
    MongooseModule.forFeature([{ name: 'Accounts', schema: accountSchema }])
  ],
  providers: [
    EntryService
  ],
  controllers: [
    EntryController
  ],
})
export class EntryModule {}
