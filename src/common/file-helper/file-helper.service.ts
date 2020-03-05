import { Injectable } from '@nestjs/common';
import * as rimraf from "rimraf";

@Injectable()
export class FileHelperService {

    constructor() { }

    DeleteFolderGivenFilePath(fileFullPath: string): boolean {
        const pathToDelete = fileFullPath.substring(0, fileFullPath.lastIndexOf('/'));
        
        try {
            rimraf(pathToDelete, () => { console.log(`${pathToDelete} removed.`); });
            return true;
        } catch(error) {
            return false;
        }
    }
}
