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

    // Create One Record
    @Post('/login')
    @UsePipes(ValidationPipe)
    async AuthenticateOne(@Body() item: AuthAuthenticateOneDto): Promise<any> {
        try {
            console.log(`Logged in using AD: ${item._email}`);
            const result = await this.service.authenticateUser(item);
            console.log('result', result);
            return result;
        } catch (error) {
            AuthController.logError(this, 28, error);
            return AuthController.examineError(error);
        }
    }

    @Post('/get-user-data')
    @UseGuards(AuthGuard())
    async AuthorizeOne(@GetUser() user: User): Promise<any> {
        try {
            return user;
        } catch (error) {
            AuthController.logError(this, 39, error);
            return AuthController.examineError(error);
        }
    }
}
