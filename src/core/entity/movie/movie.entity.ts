import { IReview } from "../review/review.entity";

export interface IMovie {
    tmdb_Id?:string;
    title:string;
    release_date: Date;
    poster: string;
    review: IReview[]  
}