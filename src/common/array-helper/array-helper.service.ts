import { Injectable } from '@nestjs/common';

@Injectable()
export class ArrayHelperService {

    constructor() { }

    arrayToKeyValuePair(array: Array<Object>, keyField: string, valueField: string): Object {
        return array.reduce((obj, item) => {
          obj[item[keyField]] = item[valueField];
          return obj;
        }, {});
    }

    getElementsInArray1NotinArray2(array1: Array<string>, array2: Array<string>): Array<string> {
      return array1.filter(function(item) {
        return !array2.includes(item); 
      })
    }
}
