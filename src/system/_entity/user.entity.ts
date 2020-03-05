import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { BaseEntity } from '../../common/_entity/base.entity';

@Entity("_user_")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn() _user_id: string;
    @Column() _email: string;
    @Column() _user_name: string;
    @Column() _description: string;
    @Column() _access_control: string;

    public constructor(
        _user_id?: string,
        _email?: string,
        _user_name?: string,
        _description?: string,
        _access_control?: string
    ) {
        super();
        this.class_name = this.constructor.name;
        this._user_id = _user_id;
        this._email = _email;
        this._user_name = _user_name;
        this._description = _description;
        this._access_control = _access_control;
    }

    // Return a new object to contain values
    static CreateEmptyObject(): User { return new User(); }

    // C - For Creating
    static CreateWriteOneObject(input: any): User {
        let return_object = User.CreateEmptyObject();

        User.setCreatedMetaData(input, return_object);

        return { ...return_object, ...input };
    }

    // R - For Reading
    static CreateReadManyObject(input: any): User {
        let return_object = User.CreateEmptyObject();

        User.setReadMetaData(input, return_object);

        return { ...return_object, ...input };
    }

    // R - For Reading
    static CreateReadOneObject(input: any): User {
        let return_object = User.CreateEmptyObject();

        User.setReadMetaData(input, return_object);

        return { ...return_object, ...input };
    }

    // U - For Updating
    static CreateUpdateOneObject(input: any): User {
        let return_object = User.CreateEmptyObject();

        User.setUpdatedMetaData(input, return_object);

        return { ...return_object, ...input };
    }

    // D - For Deleting
    static CreateDeleteOneObject(input: any): User {
        let return_object = User.CreateEmptyObject();

        User.setDeletedMetaData(input, return_object);

        return { ...return_object, ...input };
    }
}