import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserModel } from 'src/data-provider/models/user/User.entity';

import { v4 as uuidv4 } from 'uuid';
import { ReviewModel } from 'src/data-provider/models/review/Review.entity';
import { IReviewProvider } from '../review.provider';
import { IMovieProvider } from '../movie.provider';
import { MovieModel } from 'src/data-provider/models/movie/Movie.entity';

@Injectable()
export class MovieProvider implements IMovieProvider {

    constructor(
        @InjectRepository(MovieModel)
        private movieRepository: Repository<MovieModel>,
        @InjectRepository(ReviewModel)
        private reviewsRepository: Repository<ReviewModel>,
        @InjectRepository(UserModel)
        private userRepository: Repository<UserModel>,
    ) { }
    async getMoviesReviews(tmdbId: string): Promise<any> {
        try {
            
            return this.movieRepository.create()
        } catch (e) {
            return e
        }
    }



}

