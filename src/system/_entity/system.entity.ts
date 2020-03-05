import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { BaseEntity } from '../../common/_entity/base.entity';

@Entity("_system_")
export class System extends BaseEntity {
    @PrimaryGeneratedColumn() _system_id: string;
    @Column() _system_name: string;
    @Column() _description: string;

    public constructor(
        _system_id?: string,
        _system_name?: string,
        _description?: string
    ) {
        super();
        this.class_name = this.constructor.name;
        this._system_id = _system_id;
        this._system_name = _system_name;
        this._description = _description;
    }

    // Return a new object to contain values
    static CreateEmptyObject(): System { return new System(); }

    // C - For Creating
    static CreateWriteOneObject(input: any): System {
        let return_object = System.CreateEmptyObject();

        System.setCreatedMetaData(input, return_object);

        return { ...return_object, ...input };
    }

    // R - For Reading
    static CreateReadManyObject(input: any): System {
        let return_object = System.CreateEmptyObject();

        System.setReadMetaData(input, return_object);

        return { ...return_object, ...input };
    }

    // R - For Reading
    static CreateReadOneObject(input: any): System {
        let return_object = System.CreateEmptyObject();

        System.setReadMetaData(input, return_object);

        return { ...return_object, ...input };
    }

    // U - For Updating
    static CreateUpdateOneObject(input: any): System {
        let return_object = System.CreateEmptyObject();

        System.setUpdatedMetaData(input, return_object);

        return { ...return_object, ...input };
    }

    // D - For Deleting
    static CreateDeleteOneObject(input: any): System {
        let return_object = System.CreateEmptyObject();

        System.setDeletedMetaData(input, return_object);

        return { ...return_object, ...input };
    }
}