import { Injectable } from '@nestjs/common';
import { MovieModel } from '../models/movie/Movie.entity';
import { MovieDto } from 'src/controller/dto/movie/movie.dto';

@Injectable()
export abstract class IMovieProvider {
    abstract getMovies(tmdbId: number): Promise<MovieModel>
    abstract createMovies(movie:MovieDto): Promise<MovieModel>
}