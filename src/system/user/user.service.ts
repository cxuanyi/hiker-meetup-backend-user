import { Injectable, NotFoundException } from '@nestjs/common';
import * as crypto from 'crypto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '../_entity/user.entity';
import { UserRepository } from '../_entity/user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}

    async getUsers(item: User): Promise<any> {
        const users = await this.userRepository.getUsers(item);
        const currentDateTime = new Date();

        const hashResult = crypto.createHash('md5').update(JSON.stringify(users) + currentDateTime.getSeconds()).digest("hex");

        return { hash: hashResult };
    }

    async findOne(item: User): Promise<User> {
        return await this.userRepository.findOne(item);
    }
}
