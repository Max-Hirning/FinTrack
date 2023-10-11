import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user/module/module.module';
import { AuthModule } from '../auth/module/module.module';
import { EntryModule } from '../entry/module/module.module';
import { AccountModule } from '../account/module/module.module';
import { CurrencyModule } from '../currency/module/module.module';
import { EntryTypeModule } from '../entry-type/module/module.module';
import { EntryCategoryModule } from '../entry-category/module/module.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    UserModule,
    AuthModule,
    EntryModule,
    AccountModule,
    CurrencyModule,
    EntryTypeModule,
    JwtModule.register({
      signOptions: {
        expiresIn: process.env.JWT_TOKEN_EXPIRES_IN
      },
      secret: process.env.SECRET_KEY,
    }),
    EntryCategoryModule,
    MongooseModule.forRoot(process.env.DB_URL, { dbName: 'FinTrack' }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
