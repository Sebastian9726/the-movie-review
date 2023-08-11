import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { IMovieProvider } from '../movie.provider';
import { MovieModel } from 'src/data-provider/models/movie/Movie.entity';
import { MovieDto } from 'src/controller/dto/movie/movie.dto';

@Injectable()
export class MovieProvider implements IMovieProvider {
    private readonly logger = new Logger(MovieProvider.name);
    constructor(
        @InjectRepository(MovieModel)
        private movieRepository: Repository<MovieModel>,
    ) { }

    async getMovies(tmdbId: number): Promise<any> {
        try {
            
            const filter = {
                "tmdb_id": tmdbId
            }
            return await this.movieRepository.findOneBy(filter);
        } catch (e) {
            return e
        }
    }

    async createMovies(movie:MovieDto): Promise<MovieModel> {

        this.logger.log(`createMovies ${JSON.stringify(movie)}`)
        const review = []
        const movieCreated = this.movieRepository.create({
            ...movie,
            review
        });
        const movieSaved = await this.movieRepository.save(movieCreated)
        this.logger.log(`created ${JSON.stringify(movieSaved)}`)
        return movieSaved
        

    }

}

