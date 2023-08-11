import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IMovieService {
  abstract getMoviesReviews(tmdbId: number): Promise<any>;
 }