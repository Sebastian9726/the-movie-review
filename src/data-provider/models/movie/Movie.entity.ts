import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReviewModel } from "../review/Review.entity";
import { AbstractEntity } from "../abstract.entity";

@Entity('movie')
export class MovieModel extends AbstractEntity<MovieModel>  {
    
    @Column('int', {
        unique: true,
        primary:true
    })
    tmdb_id: number;

    @Column()
    title: string;

    @Column('date')
    release_date: Date;

    @Column()
    poster: string;

    @Column()
    overview: string;

    @OneToMany(
        () => ReviewModel, 
        (review) => review.movie,
        { cascade: true }
    )
    review: ReviewModel[];


}


