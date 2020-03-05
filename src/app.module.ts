import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { CommonModule } from './common/common.module';
import { SystemModule } from './system/system.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CommonModule,
    SystemModule,
    ConfigModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
