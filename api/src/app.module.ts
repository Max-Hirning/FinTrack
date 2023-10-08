import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/module/module.module';
import { AuthModule } from './auth/module/module.module';
import { CurrencyModule } from './currency/module/module.module';
import { EntryTypeModule } from './entry-type/module/module.module';
import { EntryCategoryModule } from './entry-category/module/module.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    CurrencyModule,
    EntryTypeModule,
    EntryCategoryModule,
    MongooseModule.forRoot('mongodb+srv://maxHirning78:54di8mQjallEqB@myprojects.04tu6y5.mongodb.net/?retryWrites=true&w=majority', { dbName: 'FinTrack' }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
