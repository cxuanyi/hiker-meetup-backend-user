import { Injectable, UnauthorizedException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

import { ValidatorService } from '../../common/validator/validator.service';
import { User } from '../_entity/user.entity';
import { Auth } from './_entity-dto/auth.entity';
import { AuthAuthenticateOneDto } from './_entity-dto/authauthenticateone.dto';
import { JwtPayload } from '../_entity/jwt-payload.entity';

import * as ActiveDirectory from 'activedirectory';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>,
        private jwtService: JwtService,
        private readonly validatorService: ValidatorService
    ) {
    }


    async authenticateUser(itemDto: AuthAuthenticateOneDto): Promise<{accessToken: string}> {
            const item = Auth.CreateReadOneObject(itemDto);
            this.validatorService.clean(item);
            let user = await this.repository.findOne({ _email: itemDto._email });

            if (!user) {
                // throw new UnauthorizedException("Invalid Username & Password.")
                throw new Error("Invalid Username & Password. 1");
            }

            const payload = JwtPayload.CreateReadOneObject({_email: item._email});

            const signedPayload = await this.jwtService.signAsync(payload);

            return {accessToken: signedPayload};
    }

    authenticateWithActiveDirectory = (username, password): Promise<any> => {
        return new Promise((resolve, reject) => {
            const usernameSplitted = username.split('@');
            const config = usernameSplitted[1] ? this.getActiveDirectoryConfig(usernameSplitted[1]) : null;

            if (!config) {
                return reject('Invalid Username');
            }

            let activedirectory = new ActiveDirectory(config);

            activedirectory.authenticate(username, password, (err, auth) => {
                if (err) {
                    return resolve(auth);
                }
                return resolve(auth);
            });
        });
    }

    getActiveDirectoryConfig = (fqdn: string): object => {
        switch (fqdn) {
            case "sg.yokogawa.com":
                return {
                    url: 'ldap://as.ykgw.net',
                    baseDN: 'dc=ykgw,dc=net'
                }
            case "ymb.yokogawa.com":
                return {
                    url: 'ldap://ymb.as.ykgw.net',
                    baseDN: 'dc=ymb,dc=as,dc=ykgw,dc=net'
                }
            default:
                return null;
        }
    }

    async getUserAccessControl(user: User): Promise<string> {
        let roleAccessDetailList = [];
        let result = "";

        result = this.consolidateAccessControl(roleAccessDetailList);

        return result;
    }

    consolidateAccessControl(roleAccessDetailList: Array<string>): string {
        let accessControlConsolidated = {};

        const roleAccessList = roleAccessDetailList;

        for (const roleAccess of roleAccessList) {
            const roleAccessObj = JSON.parse(roleAccess);

            const roleAccessKeyLevel1List = Object.keys(roleAccessObj);

            for (const roleAccessKeyLevel1 of roleAccessKeyLevel1List) {
                if (!accessControlConsolidated[roleAccessKeyLevel1]) {
                    accessControlConsolidated[roleAccessKeyLevel1] =
                        roleAccessObj[roleAccessKeyLevel1];
                }
                const roleAccessLevel2List = roleAccessObj[roleAccessKeyLevel1];
                const roleAccessLevel2KeyList = Object.keys(roleAccessLevel2List);

                for (const roleAccessLevel2Key of roleAccessLevel2KeyList) {
                    if (
                        !accessControlConsolidated[roleAccessKeyLevel1][roleAccessLevel2Key]
                    ) {
                        accessControlConsolidated[roleAccessKeyLevel1][roleAccessLevel2Key] =
                            roleAccessObj[roleAccessKeyLevel1][roleAccessLevel2Key];
                    }

                    accessControlConsolidated[roleAccessKeyLevel1][roleAccessLevel2Key] = [
                        ...accessControlConsolidated[roleAccessKeyLevel1][roleAccessLevel2Key],
                        ...roleAccessObj[roleAccessKeyLevel1][roleAccessLevel2Key]
                    ];
                    accessControlConsolidated[roleAccessKeyLevel1][roleAccessLevel2Key] = [...new Set<string>(accessControlConsolidated[roleAccessKeyLevel1][roleAccessLevel2Key])];
                }
            }
        }

        return JSON.stringify(accessControlConsolidated);
    }
}
