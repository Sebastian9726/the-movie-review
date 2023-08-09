import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserModel {

    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column('text', {
        unique: true
    },)
    name: string;

    @Column()
    genre: string;


    @Column()
    username: string

    @Column()
    password: string

}


