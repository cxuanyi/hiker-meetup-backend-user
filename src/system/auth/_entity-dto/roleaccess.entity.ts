import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { BaseEntity } from '../../../common/_entity/base.entity';

@Entity("_role_access")
export class RoleAccess extends BaseEntity {
    @PrimaryGeneratedColumn() _role_access_id: string;
    @Column() _role: string;
    @Column() _access: string;
    @Column() _description: string;

    public constructor(
        _role_access_id?: string,
        _role?: string,
        _access?: string,
        _description?: string
    ) {
        super();
        this.class_name = this.constructor.name;
        this._role_access_id = _role_access_id;
        this._role = _role;
        this._access = _access;
        this._description = _description;
    }

    // Return a new object to contain values
    static CreateEmptyObject(): RoleAccess { return new RoleAccess(); }

    // C - For Creating
    static CreateWriteOneObject(input: any, _created_by: string): RoleAccess {
        let return_object = RoleAccess.CreateEmptyObject();

        RoleAccess.setCreatedMetaData(input, return_object, _created_by);

        return { ...return_object, ...input };
    }

    // R - For Reading
    static CreateReadManyObject(input: any): RoleAccess {
        let return_object = RoleAccess.CreateEmptyObject();

        RoleAccess.setReadMetaData(input, return_object);

        return { ...return_object, ...input };
    }

    // R - For Reading
    static CreateReadOneObject(input: any): RoleAccess {
        let return_object = RoleAccess.CreateEmptyObject();

        RoleAccess.setReadMetaData(input, return_object);

        return { ...return_object, ...input };
    }

    // U - For Updating
    static CreateUpdateOneObject(input: any, _deleted_by: string): RoleAccess {
        let return_object = RoleAccess.CreateEmptyObject();

        RoleAccess.setUpdatedMetaData(input, return_object, _deleted_by);

        return { ...return_object, ...input };
    }

    // D - For Deleting
    static CreateDeleteOneObject(input: any, _deleted_by: string): RoleAccess {
        let return_object = RoleAccess.CreateEmptyObject();

        RoleAccess.setDeletedMetaData(input, return_object, _deleted_by);
        return_object["_is_mutable"] = false;
        
        return { ...return_object, ...input };
    }

    // UD - For Undeleting
    static CreateUndeleteOneObject(input: any, _deleted_by: string): RoleAccess {
        let return_object = RoleAccess.CreateEmptyObject();

        RoleAccess.setUndeletedMetaData(input, return_object);
        return_object["_is_mutable"] = true;

        return { ...return_object, ...input };
    }

    // DH - For Deleting
    static CreateHardDeleteManyObject(input: any): RoleAccess {
        let return_object = RoleAccess.CreateEmptyObject();
        return { ...return_object, ...input };
    }
}