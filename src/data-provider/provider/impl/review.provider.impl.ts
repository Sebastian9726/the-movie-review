import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserModel } from 'src/data-provider/models/user/User.entity';

import { v4 as uuidv4 } from 'uuid';
import { ReviewModel } from 'src/data-provider/models/review/Review.entity';
import { IReviewProvider } from '../review.provider';

@Injectable()
export class ReviewProvider implements IReviewProvider {

    constructor(
        @InjectRepository(UserModel)
        private usersRepository: Repository<UserModel>,
        @InjectRepository(ReviewModel)
        private reviewsRepository: Repository<ReviewModel>,
    ) { }
   async  createReview(review: any): Promise<ReviewModel> {
    try {

        const { data = [], ...userDetail } = review
        return this.reviewsRepository.create()
    } catch (e) {
        return e
    }
    }


}

