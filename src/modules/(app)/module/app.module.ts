import { Module } from '@nestjs/common';
import { CoreModule } from '../../../core/core.module.js';
import { AppController } from '../controller/app.controller.js';
import { AppService } from '../service/app.service.js';

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
