import {  Injectable } from '@nestjs/common';
import { IReviewService } from '../../review.service';
import { ReviewDto } from 'src/controller/dto/rewied/review.dto';
import { IReviewUc } from 'src/core/use-case/review/review.uc';
@Injectable()
export class ReviewService implements IReviewService {


  constructor(
    public readonly _userUc: IReviewUc,
  )
 { }


  async create(review: ReviewDto): Promise<any> {
    return await this._userUc.createReview(review)
  }
 

}