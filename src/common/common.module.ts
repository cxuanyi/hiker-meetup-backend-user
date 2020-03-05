import { Module, Global } from '@nestjs/common';
import { ValidatorService } from './validator/validator.service';
import { ArrayHelperService } from './array-helper/array-helper.service';
import { FileHelperService } from './file-helper/file-helper.service';

@Module({
    providers: [ValidatorService, ArrayHelperService, FileHelperService],
    exports: [ValidatorService, ArrayHelperService, FileHelperService],
})
export class CommonModule { }
