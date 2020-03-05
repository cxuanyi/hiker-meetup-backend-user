import { Injectable } from '@nestjs/common';
import { ArrayHelperService } from '../array-helper/array-helper.service';

@Injectable()
export class ValidatorService {

    constructor(private arrayHelperService: ArrayHelperService) { }

    clean<T>(input: T) {
        Object.keys(input).map(key => input[key] === undefined && delete input[key]);
        Object.keys(input).map(key => input[key] === 'undefined' && delete input[key]);
        Object.keys(input).map(key => input[key] === null && delete input[key]);
        Object.keys(input).map(key => input[key] === 'null' && delete input[key]);
        delete input['class_name'];
        delete input['_active_user_id'];
        delete input['iat'];
        delete input['exp'];
    }

    removeProcessingFields(targetItem: object, referenceTemplate: object) {
        const referenceTemplateFields = Object.keys(referenceTemplate);
        const targetItemFields = Object.keys(targetItem);
        const result = this.arrayHelperService.getElementsInArray1NotinArray2(targetItemFields, referenceTemplateFields);
        for(const element of result) {
            delete targetItem[element];
        }
    }
}
