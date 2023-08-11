import { Injectable, Logger } from "@nestjs/common";
import { IReviewUc } from "../review.uc";
import { IReviewProvider } from "src/data-provider/provider/review.provider";
import { ReviewDto } from "src/controller/dto/review/review.dto";
import { IMovieUc } from "../../movie/movie.uc";


@Injectable()
export class ReviewUc implements IReviewUc {
  private readonly logger = new Logger(ReviewUc.name);
  constructor(
    private readonly _reviewProvider: IReviewProvider,
    private readonly _movieUc: IMovieUc,

  ) { }
  async getUserReviews(name: string): Promise<any> {
    this.logger.log("getUserReviews start the the flow",)
    const movie_created = await this._reviewProvider.getUserReview(name)
    return movie_created
  }
  async createReview(createReview: ReviewDto): Promise<any> {

    /*
    First: Get movie from movie table if does not find so fetch TMDB and then save to movie table. 
    */
    try {

      this.logger.log("createReview start the flow",)
      let movie = await this._movieUc.getMoviesReviews(createReview.movie)
      this.logger.log(`query movie table response: ${JSON.stringify(movie)}`)
      const movie_created = await this._reviewProvider.createReview(createReview, movie)
      this.logger.log(`query movie table response: ${JSON.stringify(movie_created)}`)
      return movie_created

    } catch (e) {
      this.logger.error(e);
      return e
    }


  }


}
