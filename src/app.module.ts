import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { CommonModule } from './common/common.module';
import { SystemModule } from './system/system.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "hmu-dev-instance.cima23xzs8ac.ap-southeast-1.rds.amazonaws.com",
      port: 5432,
      username: "hmu_dev_user",
      password: "Password#123",
      database: "hmu_dev_db",
      entities: [
        __dirname.includes("dist") ? "./**/*.entity.js" : "./**/*.entity.ts"
      ],
      synchronize: false
    }),
    CommonModule,
    SystemModule,
    ConfigModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
