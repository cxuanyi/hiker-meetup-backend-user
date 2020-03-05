import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { BaseEntity } from '../../common/_entity/base.entity';

@Entity("_rec_status")
export class RecStatus extends BaseEntity {
    @PrimaryGeneratedColumn() _id: string;
    @Column() _rec_status_name: string;

    public constructor(
        _id?: string,
        _rec_status_name?: string,
        description?: string
    ) {
        super();
        this.class_name = this.constructor.name;
        this._id = _id;
        this._rec_status_name = _rec_status_name;
    }

    // Return a new object to contain values
    static CreateEmptyObject(): RecStatus { return new RecStatus(); }

    // C - For Creating
    static CreateWriteOneObject(input: any): RecStatus {
        let return_object = RecStatus.CreateEmptyObject();

        RecStatus.setCreatedMetaData(input, return_object);

        return { ...return_object, ...input };
    }

    // R - For Reading
    static CreateReadManyObject(input: any): RecStatus {
        let return_object = RecStatus.CreateEmptyObject();

        RecStatus.setReadMetaData(input, return_object);

        return { ...return_object, ...input };
    }

    // R - For Reading
    static CreateReadOneObject(input: any): RecStatus {
        let return_object = RecStatus.CreateEmptyObject();

        RecStatus.setReadMetaData(input, return_object);

        return { ...return_object, ...input };
    }

    // U - For Updating
    static CreateUpdateOneObject(input: any): RecStatus {
        let return_object = RecStatus.CreateEmptyObject();

        RecStatus.setUpdatedMetaData(input, return_object);

        return { ...return_object, ...input };
    }

    // D - For Deleting
    static CreateDeleteOneObject(input: any): RecStatus {
        let return_object = RecStatus.CreateEmptyObject();

        RecStatus.setDeletedMetaData(input, return_object);

        return { ...return_object, ...input };
    }
}