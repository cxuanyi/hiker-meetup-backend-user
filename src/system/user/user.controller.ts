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

    // Create One Record
    @Post('/one')
    async createOne(@Body() item: User): Promise<any> {
        try {
            return await this.service.createOne(item);
        } catch (error) {
            UserController.logError(this, 22, error);
            return UserController.examineError(error);
        }
    }

    // Retrieve All Records
    @Post()
    async getAll(@Body() item: User): Promise<any> {
        try {
            return await this.service.findMany(item);
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

    // Update One Record
    @Put('/one')
    async updateOne(@Body() item: User): Promise<any> {
        try {
            return await this.service.updateOne(item);
        } catch (error) {
            UserController.logError(this, 55, error);
            return UserController.examineError(error);
        }
    }

    // Delete One Record
    @Delete('/one')
    async deleteOne(@Body() item: User): Promise<any> {
        try {
            return await this.service.deleteOne(item);
        } catch (error) {
            UserController.logError(this, 66, error);
            return UserController.examineError(error);
        }
    }
}
