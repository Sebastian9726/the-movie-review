import { Injectable } from '@nestjs/common';
import { ReviewDto } from 'src/controller/dto/review/review.dto';

@Injectable()
export abstract class IReviewUc{
    abstract createReview(createReview: ReviewDto): Promise<any>;
    abstract getUserReviews(name: string): Promise<any>;
}