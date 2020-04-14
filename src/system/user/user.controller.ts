import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';

import { BaseController } from '../../common/controller/base.controller'
import { User } from '../_entity/user.entity';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
//@UseGuards(AuthGuard())
export class UserController extends BaseController {
    constructor(private service: UserService) {
        super();
        this.class_name = this.constructor.name;
    }


    // Retrieve All Records
    @Get()
    async getAll(@Body() item: User): Promise<any> {
        console.log(item);
        try {
            return await this.service.getUsers(item);
        } catch (error) {
            UserController.logError(this, 33, error);
            return UserController.examineError(error);
        }
    }

    // Retrieve One Record
    @Get('/one')
    async findOne(@Body() item: User): Promise<any> {
        try {
            return await this.service.findOne(item);
        } catch (error) {
            UserController.logError(this, 44, error);
            return UserController.examineError(error);
        }
    }
}
