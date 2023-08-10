import { Injectable } from "@nestjs/common";
import { IReviewProvider } from "src/data-provider/provider/review.provider";
import { IMovieUc } from "../movie.uc";
import { IMovieProvider } from "src/data-provider/provider/movie.provider";


@Injectable()
export class MovieUc implements IMovieUc {

  constructor(
    private readonly _movieProvider: IMovieProvider,
    //private readonly _userTransformUcRe: IUserTransformUcRe
  ) { }
  async getMoviesReviews(tmdbId: string): Promise<any>{
    return this._movieProvider.getMoviesReviews(tmdbId)
    
  }


}
