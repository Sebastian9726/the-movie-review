import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IMovieService {
  abstract getMoviesReviews(tmdbId: string): Promise<any>;
 }