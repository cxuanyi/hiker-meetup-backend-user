import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            secretOrKeyProvider: passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: 'https://cognito-idp.ap-southeast-1.amazonaws.com/ap-southeast-1_Krx5EBNva/.well-known/jwks.json',
            }),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            aud: '31it8rd08fvmj8evp5po8s73oc',
            iss: 'https://cognito-idp.ap-southeast-1.amazonaws.com/ap-southeast-1_Krx5EBNva',
            alg: "RS256"
        });
    }

    validate(payload: any, done: VerifiedCallback) {
        if (!payload) {
            done(new UnauthorizedException(), false); // 2
        }

        return done(null, payload);
    }
}