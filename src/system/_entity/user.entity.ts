import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity("_user_")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn() _user_id: string;
    @Column() _email?: string;
    @Column() _user_name?: string;
    @Column() _description?: string;
}