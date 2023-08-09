import { CreateUserDto } from "src/controller/dto/user/create-user.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../../../core/entity/user/user.entity";
import { v4 as uuidv4 } from 'uuid';

@Entity('users')
export class UserModel {

    @PrimaryGeneratedColumn("uuid")
    userId: string;

    @Column({
        unique: true
    })
    name: string;

    @Column()
    genre: string;


    @Column()
    username: string

    @Column()
    password: string

    constructor(user:IUser) {
        this.userId = uuidv4();
        this.name =user.name;
        this.genre = user.genre
        this.username= user.username
        this.password= user.password
    }
    
    
    static entityToDto(userEntity: UserModel): CreateUserDto {
        return new CreateUserDto(userEntity);
    }    

}


