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

import { UserRepository } from './_entity/user.repository';
import { UserService } from './user/user.service'; 
import { UserController } from './user/user.controller';


@Module({
  imports: [
    CommonModule,
    ConfigModule,
    TypeOrmModule.forFeature([
      UserRepository
    ]),
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
    UserController
  ],
  providers: [
    AuthService,
    JwtStrategy,
    UserService,
  ],
  exports:[
    JwtStrategy,
    PassportModule,
    UserService
  ]
})
export class SystemModule { }
