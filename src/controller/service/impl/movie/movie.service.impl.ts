import { Injectable } from '@nestjs/common';
import { IMovieService } from '../../movie.service';
import { IMovieUc } from 'src/core/use-case/movie/movie.uc';

@Injectable()
export class MovieService implements IMovieService {

  constructor(
    public readonly _movieUc: IMovieUc,
  ) { }

  async getMoviesReviews(tmdbId: number): Promise<any> {
    return this._movieUc.getMoviesReviews(tmdbId)
  }




}