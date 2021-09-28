import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

// Create a class for every single table
// 'Users' will be the name of the table, so don't put something random
@Entity() // add a decorator
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id!: number;
    @Column()
    name!: string;
    @Column()
    username!: string;
    @Column()
    password!: string;
}

