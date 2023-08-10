import { Injectable } from '@nestjs/common';
import { ReviewDto } from 'src/controller/dto/rewied/review.dto';

@Injectable()
export abstract class IReviewUc{
    abstract createReview(createReview: ReviewDto): Promise<any>;
}