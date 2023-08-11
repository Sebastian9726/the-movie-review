import { Injectable, Logger } from "@nestjs/common";
import { IMovieUc } from "../movie.uc";
import { IMovieProvider } from "src/data-provider/provider/movie.provider";
import { IApiMoviesProvider } from "src/data-provider/provider/api-movies";
import { MovieDto } from "src/controller/dto/movie/movie.dto";
@Injectable()
export class MovieUc implements IMovieUc {
  private readonly logger = new Logger(MovieUc.name);
  constructor(
    private readonly _movieProvider: IMovieProvider,
    private readonly _apiMoviesProvider: IApiMoviesProvider
    //private readonly _userTransformUcRe: IUserTransformUcRe
  ) { }
  async getMoviesReviews(tmdbId: number): Promise<any>{

    let movie_table = await this._movieProvider.getMovies(tmdbId)
    this.logger.log(`Query movie table: ${JSON.stringify(movie_table)}`)
     let movieData
    if (!movie_table) {
      const fetchMovie = await this._apiMoviesProvider.request(tmdbId)
      this.logger.log(`Fetch Api TMDB response: ${JSON.stringify(fetchMovie)}`)
      if (fetchMovie) {
        const movieDto = new MovieDto(
          fetchMovie.id,
          fetchMovie.title,
          fetchMovie.release_date,
          fetchMovie.poster_path,
          fetchMovie.overview,
          []
        )

        let movie_created = await this._movieProvider.createMovies(movieDto)
        movieData = movie_created
      } else {
        throw "The movie does not found"
      }
    } else {
      this.logger.log("createReview found a movie in movie table",)
      movieData = movie_table
    }
    return movieData
  }


}
