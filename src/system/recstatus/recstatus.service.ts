import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ValidatorService } from '../../common/validator/validator.service';
import { BaseService } from '../../common/service/base.service';
import { RecStatus } from '../_entity/recstatus.entity';

@Injectable()
export class RecStatusService extends BaseService {
    constructor(
        @InjectRepository(RecStatus)
        private repository: Repository<RecStatus>,
        private readonly validatorService: ValidatorService
    ) {
        super();
        this.class_name = this.constructor.name;
    }

    async createOne(item: RecStatus): Promise<any> {
        try {
            item = RecStatus.CreateWriteOneObject(item);
            this.validatorService.clean(item);
            return await this.repository.insert(item);
        } catch (error) {
            RecStatusService.throwServiceError(this, 27, error);
        }
    }

    async findMany(item: RecStatus): Promise<RecStatus[]> {
        try {
            item = RecStatus.CreateReadManyObject(item);
            this.validatorService.clean(item);
            return await this.repository.find(item);
        } catch (error) {
            RecStatusService.throwServiceError(this, 37, error);
        }
    }

    async findOne(item: RecStatus): Promise<RecStatus> {
        try {
            item = RecStatus.CreateReadOneObject(item);
            this.validatorService.clean(item);
            return await this.repository.findOne(item);
        } catch (error) {
            RecStatusService.throwServiceError(this, 47, error);
        }
    }

    async updateOne(item: RecStatus): Promise<any> {
        try {
            item = RecStatus.CreateUpdateOneObject(item);
            this.validatorService.clean(item);
            return await this.repository.update(item._id, item);
        } catch (error) {
            RecStatusService.throwServiceError(this, 57, error);
        }
    }

    async deleteOne(item: RecStatus): Promise<any> {
        try {
            item = RecStatus.CreateDeleteOneObject(item);
            this.validatorService.clean(item);
            return await this.repository.update(item._id, item);
        } catch (error) {
            RecStatusService.throwServiceError(this, 67, error);
        }
    }
}
