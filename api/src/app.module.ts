import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ModuleModule } from './currency/module/module.module';
import { EntryCategoryModule } from './entry-category/module/module.module';

@Module({
  providers: [AppService],
  controllers: [AppController],
  imports: [EntryCategoryModule, ModuleModule],
})
export class AppModule {}
