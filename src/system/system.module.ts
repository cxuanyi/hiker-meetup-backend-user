import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CommonModule } from '../common/common.module';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './jwt.strategy';

import { SystemController } from './system/system.controller';
import { SystemService } from './system/system.service';
import { System } from './_entity/system.entity';

import { RecStatusController } from './recstatus/recstatus.controller';
import { RecStatusService } from './recstatus/recstatus.service';
import { RecStatus } from './_entity/recstatus.entity';

import { User } from './_entity/user.entity';
import { UserService } from './user/user.service'; 
import { UserController } from './user/user.controller';

import { RoleAccess } from './auth/_entity-dto/roleaccess.entity';

@Module({
  imports: [
    CommonModule,
    ConfigModule,
    TypeOrmModule.forFeature([
      User,
      RoleAccess,
      System,
      RecStatus]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.getValue('jwt-secret'),
        signOptions: {
            expiresIn: 36000,
        },
      }),
      inject: [ConfigService]
    }),
  ],
  controllers: [
    AuthController,
    UserController,
    SystemController,
    RecStatusController],
  providers: [
    AuthService,
    JwtStrategy,
    UserService,
    SystemService,
    RecStatusService],
  exports:[
    JwtStrategy,
    PassportModule,
    UserService
  ]
})
export class SystemModule { }
