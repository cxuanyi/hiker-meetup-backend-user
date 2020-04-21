import { Injectable, UnauthorizedException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

import { ValidatorService } from '../../common/validator/validator.service';
import { User } from '../_entity/user.entity';
import { Auth } from './_entity-dto/auth.entity';
import { AuthAuthenticateOneDto } from './_entity-dto/authauthenticateone.dto';
import { JwtPayload } from '../_entity/jwt-payload.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>,
        private readonly validatorService: ValidatorService
    ) {
    }
}
