import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt'
import { JwtPayload } from './_entity/jwt-payload.entity';

import { ConfigService } from '../config/config.service';
import { ValidatorService } from '../common/validator/validator.service';
import { User } from './_entity/user.entity';
import { UserService } from './user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    public constructor(
        private readonly configService: ConfigService,
        private userService: UserService,
        private readonly validatorService: ValidatorService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.getValue('jwt-secret')
        });
    }

    async validate(payload: JwtPayload): Promise<any> {
        const { _email } = payload;
        
        //retrieve user information and add access control
        const user = await this.userService.findOne(<User>{ _email });

        if (!user)
            throw new UnauthorizedException();
        
        return user;
    }
}