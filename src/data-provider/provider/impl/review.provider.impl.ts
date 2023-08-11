import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { NotFoundException } from '@nestjs/common';
import { UserModel } from 'src/data-provider/models/user/User.entity';
import { ReviewModel } from 'src/data-provider/models/review/Review.entity';
import { IReviewProvider } from '../review.provider';
import { MovieModel } from 'src/data-provider/models/movie/Movie.entity';
import { ReviewDto } from 'src/controller/dto/review/review.dto';
import { MovieDto } from 'src/controller/dto/movie/movie.dto';
import { ErrorMessage, ResponseMessage } from 'src/common/utils/enums/params.enum';

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


    async createReview(createReview: ReviewDto, movie: MovieDto | MovieModel): Promise<any> {
        try {
            const { userName, comment, rating } = createReview
            this.logger.log(`createReview, ${JSON.stringify(createReview)}`)
            const filter = {
                "user_name": userName
            }
            const user = await this.usersRepository.findOneBy(filter);
            if(user){
                const movieFound = await this.movieRepository.findOneBy({ tmdb_id: movie.tmdb_id });
                this.logger.log(`movie Found: ${JSON.stringify(movieFound)}`)
                const reviewModelCreated = new ReviewModel({
                    review_id: uuidv4(),
                    name: user,
                    comment,
                    rating
                })
                const reviewCreated = [this.reviewsRepository.create(reviewModelCreated)]
                if (!movieFound) {
                    const movieCreated = this.movieRepository.create(
                        {
                            ...movie,
                            review: reviewCreated
                        }
                    )
                    const movie_saved = await this.movieRepository.save(movieCreated)
                    this.logger.log(`createReview, ${JSON.stringify(movie_saved)}`)
    
                }else{
                    reviewModelCreated.movie = movieFound
                    await this.reviewsRepository.save(reviewModelCreated)
                }
                return {message: ResponseMessage['RR-01']}
            }
            throw new NotFoundException(`${ErrorMessage['UE-01']+ userName}`)
           
        } catch (e) {
            this.logger.error(e);
            throw e
        }
    }


}

