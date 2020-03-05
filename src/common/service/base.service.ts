export class BaseService extends Object {
    public class_name?: string;

    protected constructor() {
        super();
    }

    public static throwServiceError(inputClass: BaseService, lineNumber: number, error: Error): void {
        const errorString = JSON.stringify(error);
        throw Error(`^^^Failure at[Class ${inputClass.class_name} Line #${lineNumber}]^^^ \n ${errorString}`);
    }
}