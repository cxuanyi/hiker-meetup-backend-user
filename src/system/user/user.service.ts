import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { BaseService } from '../../common/service/base.service';
import { User } from '../_entity/user.entity';
import { UserRepository } from '../_entity/user.repository';

@Injectable()
export class UserService extends BaseService {
    constructor(
        @InjectRepository(UserRepository)
        private repository: UserRepository
    ) {
        super();
        this.class_name = this.constructor.name;
    }

    async findMany(item: User): Promise<User[]> {
        try {
            return await this.repository.find(item);
        } catch (error) {
            UserService.throwServiceError(this, 37, error);
        }
    }

    async findOne(item: User): Promise<User> {
        try {
            return await this.repository.findOne(item);
        } catch (error) {
            UserService.throwServiceError(this, 47, error);
        }
    }
}
