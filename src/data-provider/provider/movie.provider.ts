import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IMovieProvider {
    abstract getMoviesReviews(tmdbId: string): Promise<any>
}