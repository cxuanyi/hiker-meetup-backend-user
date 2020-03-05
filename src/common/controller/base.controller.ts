export class BaseController extends Object {
    public class_name?: string;

    protected constructor() {
        super();
    }

    public static logError(inputClass: BaseController, lineNumber: number, error: Error) {
        const errorString = JSON.stringify(error.stack);
        console.log(` Error: <<< Failure at [Class ${inputClass.class_name} Line #${lineNumber}] >>> \n ${error.stack}`);
    }

    public static examineError(error: Error): Object {
        let returnErrorMessage = { "error": "There are error provided in the data JSON provided:" };
        return returnErrorMessage;
    }
}