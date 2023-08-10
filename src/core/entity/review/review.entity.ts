import { IMovie } from "../movie/movie.entity";
import { IUser } from "../user/user.entity";

export interface IReview {
    review_id?:string;
    name: IUser;
    comment: string;
    movie: string,
    rating:number ,
    genre_ids: IMovie[]  
}
