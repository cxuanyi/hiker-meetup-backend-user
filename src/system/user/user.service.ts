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
        const stringToHash = JSON.stringify(users) + currentDateTime.getSeconds() + (Math.random() * 10) + (Math.random() * 10);
        let hashResult = crypto.createHash('sha512').update(JSON.stringify(users) + currentDateTime.getSeconds()).digest("hex");
        hashResult = crypto.createHash('sha512').update(hashResult + (Math.random() * 10)).digest("hex");
        hashResult = crypto.createHash('sha512').update(hashResult + (Math.random() * 10)).digest("hex");
        hashResult = crypto.createHash('sha512').update(hashResult + (Math.random() * 10)).digest("hex");
        hashResult = crypto.createHash('sha512').update(hashResult + (Math.random() * 10)).digest("hex");
        hashResult = crypto.createHash('sha512').update(hashResult + (Math.random() * 10)).digest("hex");
        hashResult = crypto.createHash('sha512').update(hashResult + (Math.random() * 10)).digest("hex");
        hashResult = crypto.createHash('sha512').update(hashResult + (Math.random() * 10)).digest("hex");
        hashResult = crypto.createHash('sha512').update(hashResult + (Math.random() * 10)).digest("hex");
        hashResult = crypto.createHash('sha512').update(hashResult + (Math.random() * 10)).digest("hex");
        hashResult = crypto.createHash('sha512').update(hashResult + (Math.random() * 10)).digest("hex");
        hashResult = crypto.createHash('sha512').update(hashResult + (Math.random() * 10)).digest("hex");

        return { hash: `SavingDataOutCost` };
    }

    async findOne(item: User): Promise<User> {
        return await this.userRepository.findOne(item);
    }
}
