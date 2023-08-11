import { Injectable } from '@nestjs/common';
import { ReviewModel } from '../models/review/Review.entity';
import { ReviewDto } from 'src/controller/dto/review/review.dto';
import { MovieDto } from 'src/controller/dto/movie/movie.dto';

@Injectable()
export abstract class IReviewProvider {
    abstract createReview(review: ReviewDto, movie:MovieDto  ): Promise<ReviewModel | null>;
    abstract getUserReview(name:string ): Promise<ReviewModel | null>;
}