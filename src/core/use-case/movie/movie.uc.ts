import { Injectable } from '@nestjs/common';
@Injectable()
export abstract class IMovieUc{
    abstract getMoviesReviews(tmdbId: number): Promise<any>;
}