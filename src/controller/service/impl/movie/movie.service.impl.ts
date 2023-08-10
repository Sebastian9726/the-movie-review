import { Injectable } from '@nestjs/common';
import { IUserUc } from '../../../../core/use-case/user/user.uc';
import { IMovieService } from '../../movie.service';
import { IMovieUc } from 'src/core/use-case/movie/movie.uc';

@Injectable()
export class MovieService implements IMovieService {

  constructor(
    public readonly _movieUc: IMovieUc,
  ) { }

  async getMoviesReviews(tmdbId: string): Promise<any> {
    return this._movieUc.getMoviesReviews(tmdbId)
  }




}