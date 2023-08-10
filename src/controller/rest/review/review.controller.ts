import { Controller, Request, Post, UseGuards, Get, Body, Res, Req } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../controller/guards/jwt-auth.guard';
import { IReviewService } from 'src/controller/service/review.service';
import { ReviewDto } from 'src/controller/dto/rewied/review.dto';

@Controller('reviews')
export class ReviewController {
  constructor(
    private reviewService: IReviewService,
  ) { }

  @UseGuards(JwtAuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token otorgado por el login',
    required: true,
  })
  @Post('')
  addReview(
    @Body() review:ReviewDto ) {
    return this.reviewService.create(review)
  }

}