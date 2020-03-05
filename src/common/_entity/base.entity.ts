import { Column } from 'typeorm';

export class BaseEntity extends Object {
    public class_name?: string;

    @Column() public _desc_: string
    @Column() public _rec_status_id: string;
    @Column() public _created_on: Date;
    @Column() public _created_by: string;
    @Column() public _modified_on: Date;
    @Column() public _modified_by: string;
    @Column() public _deleted_on: Date;
    @Column() public _deleted_by: string;

    protected constructor() {
        super();
    }

    public static throwRequiredFieldError(inputClass: BaseEntity, lineNumber: number, otherInfo: string): void {
        throw new Error(`***Missing Required Field(s) [Class ${inputClass.class_name} Line #${lineNumber}]:${otherInfo}`);
    }

    public static throwUnrecognizedFieldError(inputClass: BaseEntity, lineNumber: number, otherInfo: string): void {
        throw new Error(`***Unrecognized Field(s) [Class ${inputClass.class_name} Line #${lineNumber}]:${otherInfo}`);
    }

    public static setCreatedMetaData(input: any, target_object: BaseEntity, _created_by: string = '1'): void {
        target_object._created_by = _created_by; // input._active_user_id;
    }

    public static setReadMetaData(input: any, target_object: BaseEntity): void {
        target_object._rec_status_id = '1';
    }

    public static setUpdatedMetaData(input: any, target_object: BaseEntity, _modified_by: string = '1'): void {
        target_object._modified_on = new Date();
        target_object._modified_by = _modified_by;
    }

    public static setDeletedMetaData(input: any, target_object: BaseEntity, _deleted_by: string = '1'): void {
        target_object._rec_status_id = '2';
        target_object._deleted_on = new Date();
        target_object._deleted_by = _deleted_by;
    }

    public static setUndeletedMetaData(input: any, target_object: BaseEntity, _deleted_by: string = '1'): void {
        target_object._rec_status_id = '1';
        target_object._deleted_on = new Date('1990-01-01 01:01:01+08');
        target_object._deleted_by = null;
    }
}