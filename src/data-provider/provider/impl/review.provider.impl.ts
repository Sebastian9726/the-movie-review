import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from 'src/data-provider/models/user/User.entity';
import { ReviewModel } from 'src/data-provider/models/review/Review.entity';
import { IReviewProvider } from '../review.provider';
import { MovieModel } from 'src/data-provider/models/movie/Movie.entity';
import { ReviewDto } from 'src/controller/dto/review/review.dto';
import { MovieDto } from 'src/controller/dto/movie/movie.dto';
import { skip, take } from 'rxjs';
import { join } from 'path';

@Injectable()
export class ReviewProvider implements IReviewProvider {
    private readonly logger = new Logger(ReviewProvider.name);
    constructor(
        @InjectRepository(UserModel)
        private usersRepository: Repository<UserModel>,
        @InjectRepository(ReviewModel)
        private reviewsRepository: Repository<ReviewModel>,
        @InjectRepository(MovieModel)
        private movieRepository: Repository<MovieModel>,
    ) { }

    async getUserReview(userName: string): Promise<any> {
        try {
            this.logger.log(`createReview, ${userName}`)
            const reviews = await this.reviewsRepository.find({
                relations: {
                    name: true,
                    movie: true
                },
                where: {
                    name: {
                        user_name: userName
                    }
                },
                take: 10,
                skip: 0
            });
            return reviews
        } catch (error) {
            this.logger.error(error)
        }

    }

    async createReview(createReview: ReviewDto, movie: MovieDto | MovieModel): Promise<any> {
        try {
            const { userName, comment, rating } = createReview
            this.logger.log(`createReview, ${JSON.stringify(createReview)}`)
            const filter = {
                "user_name": userName
            }
            const user = await this.usersRepository.findOneBy(filter);
            const movieFound = await this.movieRepository.findOneBy({ tmdb_id: movie.tmdb_id });
            this.logger.log(`movie Found: ${JSON.stringify(movieFound)}`)
            const reviewModelCreated = new ReviewModel({
                review_id: uuidv4(),
                name: user,
                comment,
                rating
            })
            const reviewCreated = [this.reviewsRepository.create(reviewModelCreated)]
            if (movieFound) {
                const movieCreated = this.movieRepository.create(
                    {
                        ...movie,
                        review: reviewCreated
                    }
                )
                const movie_saved = await this.movieRepository.save(movieCreated)
                this.logger.log(`createReview, ${JSON.stringify(movie_saved)}`)
                return movieCreated.review

            }
            reviewModelCreated.movie = movieFound
            const reviewSaved = await this.reviewsRepository.save(reviewModelCreated)
            return reviewSaved
        } catch (e) {
            this.logger.error(e);
            return e
        }
    }


}

