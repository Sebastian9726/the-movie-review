import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserModel } from "../user/User.entity";
import { MovieModel } from "../movie/Movie.entity";
import { AbstractEntity } from "../abstract.entity";

@Entity('review')
export class ReviewModel extends AbstractEntity<ReviewModel> { 

    @PrimaryGeneratedColumn('uuid')
    review_id: string;

    @ManyToOne(
        () => UserModel,
        (user) => user.review
    )
    name: UserModel

    @Column()
    comment: string;

    @ManyToOne(
        () => MovieModel,
        (movie) => movie.review
    )
    movie: MovieModel;

    @Column('int')
    rating: number;

}


