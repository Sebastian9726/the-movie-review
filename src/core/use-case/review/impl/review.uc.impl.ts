import { Injectable } from "@nestjs/common";
import { IReviewUc } from "../review.uc";
import { IReviewProvider } from "src/data-provider/provider/review.provider";
import { ReviewDto } from "src/controller/dto/rewied/review.dto";


@Injectable()
export class ReviewUc implements IReviewUc {

  constructor(
    private readonly _reviewProvider: IReviewProvider,
    //private readonly _userTransformUcRe: IUserTransformUcRe
  ) { }
  async createReview(createReview: ReviewDto): Promise<any> {
    
    return this._reviewProvider.createReview(createReview)
  }


}
