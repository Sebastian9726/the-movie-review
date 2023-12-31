import { Injectable } from '@nestjs/common';
import { ReviewDto } from '../dto/review/review.dto';

@Injectable()
export abstract class IReviewService {
    abstract create(CreateReview: ReviewDto): Promise<any>;
}