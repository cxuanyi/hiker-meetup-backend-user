import { User } from "./user.entity";
import { EntityRepository, Repository } from "typeorm";
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async getUsers(userFilter): Promise<User[]> {
        const query = this.createQueryBuilder('_user_');

        try {
            const users = await query.getMany();
            return users;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}