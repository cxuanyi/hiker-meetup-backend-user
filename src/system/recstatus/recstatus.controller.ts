import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';

import { BaseController } from '../../common/controller/base.controller'
import { RecStatus } from '../_entity/recstatus.entity';
import { RecStatusService } from './recstatus.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('recstatus')
//@UseGuards(AuthGuard())
export class RecStatusController extends BaseController {
    constructor(private service: RecStatusService) {
        super();
        this.class_name = this.constructor.name;
    }

    // Create One Record
    @Post('/one')
    async createOne(@Body() item: RecStatus): Promise<any> {
        try {
            return await this.service.createOne(item);
        } catch (error) {
            RecStatusController.logError(this, 22, error);
            return RecStatusController.examineError(error);
        }
    }

    // Retrieve All Records
    @Get()
    async getAll(@Body() item: RecStatus): Promise<any> {
        try {
            return await this.service.findMany(item);
        } catch (error) {
            RecStatusController.logError(this, 33, error);
            return RecStatusController.examineError(error);
        }
    }

    // Retrieve One Record
    @Get('/one')
    async findOne(@Body() item: RecStatus): Promise<any> {
        try {
            return await this.service.findOne(item);
        } catch (error) {
            RecStatusController.logError(this, 42, error);
            return RecStatusController.examineError(error);
        }
    }

    // Update One Record
    @Put('/one')
    async updateOne(@Body() item: RecStatus): Promise<any> {
        try {
            return await this.service.updateOne(item);
        } catch (error) {
            RecStatusController.logError(this, 55, error);
            return RecStatusController.examineError(error);
        }
    }

    // Delete One Record
    @Delete('/one')
    async deleteOne(@Body() item: RecStatus): Promise<any> {
        try {
            return await this.service.deleteOne(item);
        } catch (error) {
            RecStatusController.logError(this, 66, error);
            return RecStatusController.examineError(error);
        }
    }
}
