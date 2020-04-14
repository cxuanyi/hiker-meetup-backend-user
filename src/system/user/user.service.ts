import { Injectable, NotFoundException } from '@nestjs/common';

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

    async getUsers(item: User): Promise<User[]> {
        const users = await this.userRepository.getUsers(item);
        
        
        console.log('CHECK HERE users: ', users);
        // if (!users) {
        //     throw new NotFoundException();
        // }

        return users;
    }

    async findOne(item: User): Promise<User> {
        return await this.userRepository.findOne(item);
    }
}
