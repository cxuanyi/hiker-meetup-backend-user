import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ValidatorService } from '../../common/validator/validator.service';
import { BaseService } from '../../common/service/base.service';
import { User } from '../_entity/user.entity';

@Injectable()
export class UserService extends BaseService {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>,
        private readonly validatorService: ValidatorService
    ) {
        super();
        this.class_name = this.constructor.name;
    }

    async createOne(item: User): Promise<any> {
        try {
            item = User.CreateWriteOneObject(item);
            this.validatorService.clean(item);
            return await this.repository.insert(item);
        } catch (error) {
            UserService.throwServiceError(this, 27, error);
        }
    }

    async findMany(item: User): Promise<User[]> {
        try {
            item = User.CreateReadManyObject(item);
            this.validatorService.clean(item);
            return await this.repository.find(item);
        } catch (error) {
            UserService.throwServiceError(this, 37, error);
        }
    }

    async findOne(item: User): Promise<User> {
        try {
            item = User.CreateReadOneObject(item);
            this.validatorService.clean(item);
            return await this.repository.findOne(item);
        } catch (error) {
            UserService.throwServiceError(this, 47, error);
        }
    }

    async updateOne(item: User): Promise<any> {
        try {
            item = User.CreateUpdateOneObject(item);
            this.validatorService.clean(item);
            return await this.repository.update(item._user_id, item);
        } catch (error) {
            UserService.throwServiceError(this, 57, error);
        }
    }

    async deleteOne(item: User): Promise<any> {
        try {
            item = User.CreateDeleteOneObject(item);
            this.validatorService.clean(item);
            return await this.repository.update(item._user_id, item);
        } catch (error) {
            UserService.throwServiceError(this, 67, error);
        }
    }
}
