import { Controller, Post, Body, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';

import { BaseController } from '../../common/controller/base.controller'

import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Auth } from './_entity-dto/auth.entity';
import { AuthAuthenticateOneDto } from './_entity-dto/authauthenticateone.dto';

import { User } from '../_entity/user.entity';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController extends BaseController {
    constructor(private service: AuthService) {
        super();
        this.class_name = this.constructor.name;
    }

    @Post('/get-user-data')
    @UseGuards(AuthGuard('jwt'))
    async AuthorizeOne(): Promise<any> {
        try {
            console.log('Testing Authentication successful');
            return { test: "hello" };
        } catch (error) {
            AuthController.logError(this, 39, error);
            return AuthController.examineError(error);
        }
    }
}
