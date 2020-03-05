import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ValidatorService } from '../../common/validator/validator.service';
import { BaseService } from '../../common/service/base.service';
import { System } from '../_entity/system.entity';

@Injectable()
export class SystemService extends BaseService {
    constructor(
        @InjectRepository(System)
        private repository: Repository<System>,
        private readonly validatorService: ValidatorService
    ) {
        super();
        this.class_name = this.constructor.name;
    }

    async createOne(item: System): Promise<any> {
        try {
            item = System.CreateWriteOneObject(item);
            this.validatorService.clean(item);
            return await this.repository.insert(item);
        } catch (error) {
            SystemService.throwServiceError(this, 27, error);
        }
    }

    async findMany(item: System): Promise<System[]> {
        try {
            item = System.CreateReadManyObject(item);
            this.validatorService.clean(item);
            return await this.repository.find(item);
        } catch (error) {
            SystemService.throwServiceError(this, 37, error);
        }
    }

    async findOne(item: System): Promise<System> {
        try {
            item = System.CreateReadOneObject(item);
            this.validatorService.clean(item);
            return await this.repository.findOne(item);
        } catch (error) {
            SystemService.throwServiceError(this, 47, error);
        }
    }

    async updateOne(item: System): Promise<any> {
        try {
            item = System.CreateUpdateOneObject(item);
            this.validatorService.clean(item);
            return await this.repository.update(item._system_id, item);
        } catch (error) {
            SystemService.throwServiceError(this, 57, error);
        }
    }

    async deleteOne(item: System): Promise<any> {
        try {
            item = System.CreateDeleteOneObject(item);
            this.validatorService.clean(item);
            return await this.repository.update(item._system_id, item);
        } catch (error) {
            SystemService.throwServiceError(this, 67, error);
        }
    }
}
