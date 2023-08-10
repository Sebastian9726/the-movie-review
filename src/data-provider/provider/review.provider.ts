import { Injectable } from '@nestjs/common';
import { ReviewModel } from '../models/review/Review.entity';
import { ReviewDto } from 'src/controller/dto/rewied/review.dto';

@Injectable()
export abstract class IReviewProvider {
    abstract createReview(review: ReviewDto  ): Promise<ReviewModel | null>;
}