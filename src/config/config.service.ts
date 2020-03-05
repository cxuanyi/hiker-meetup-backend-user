import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor(filePath: string) {
        let jsonText = (): string => {
            return fs.readFileSync(filePath).toString();
        };

        try {
            this.envConfig = JSON.parse(jsonText());
        } catch (error) {
            console.log("Failure: ", `Could not fetch: ${error.stack}`);
        };
    }

    getObject(key: string): {} {
        return this.envConfig[key];
    }

    getValue(key: string): string {
        return this.envConfig[key];
    }
}
