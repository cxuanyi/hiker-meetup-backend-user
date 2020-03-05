import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';

import { BaseController } from '../../common/controller/base.controller'
import { System } from '../_entity/system.entity';
import { SystemService } from './system.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('system')
//@UseGuards(AuthGuard())
export class SystemController extends BaseController {
    constructor(private service: SystemService) {
        super();
        this.class_name = this.constructor.name;
    }

    // Create One Record
    @Post('/one')
    async createOne(@Body() item: System): Promise<any> {
        try {
            return await this.service.createOne(item);
        } catch (error) {
            SystemController.logError(this, 22, error);
            return SystemController.examineError(error);
        }
    }

    // Retrieve All Records
    @Get()
    async getAll(@Body() item: System): Promise<any> {
        try {
            return await this.service.findMany(item);
        } catch (error) {
            SystemController.logError(this, 33, error);
            return SystemController.examineError(error);
        }
    }

    // Retrieve One Record
    @Get('/one')
    async findOne(@Body() item: System): Promise<any> {
        try {
            return await this.service.findOne(item);
        } catch (error) {
            SystemController.logError(this, 44, error);
            return SystemController.examineError(error);
        }
    }

    // Update One Record
    @Put('/one')
    async updateOne(@Body() item: System): Promise<any> {
        try {
            return await this.service.updateOne(item);
        } catch (error) {
            SystemController.logError(this, 53, error);
            return SystemController.examineError(error);
        }
    }

    // Delete One Record
    @Delete('/one')
    async deleteOne(@Body() item: System): Promise<any> {
        try {
            return await this.service.deleteOne(item);
        } catch (error) {
            SystemController.logError(this, 66, error);
            return SystemController.examineError(error);
        }
    }
}
