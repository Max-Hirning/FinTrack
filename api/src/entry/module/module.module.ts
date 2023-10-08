import { entrySchema } from '../model';
import { Module } from '@nestjs/common';
import { EntryService } from './module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EntryController } from './module.controller';
import { AuthModule } from 'src/auth/module/module.module';

@Module({
  providers: [EntryService],
  controllers: [EntryController],
  imports: [AuthModule, MongooseModule.forFeature([{ name: 'Entries', schema: entrySchema }])],
})
export class EntryModule {}
