import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReviewModel } from "../review/Review.entity";
import { AbstractEntity } from "../abstract.entity";

@Entity('user')
export class UserModel extends AbstractEntity<UserModel> {

    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column('text', {
        unique: true
    },)
    name: string;

    @Column('text')
    genre: string;
    
    @Column()
    username: string

    @Column()
    password: string

    @OneToMany(
        () => ReviewModel,
        (review) => review.name,
        { cascade: true }
    )
    review?: ReviewModel[]
    
}


