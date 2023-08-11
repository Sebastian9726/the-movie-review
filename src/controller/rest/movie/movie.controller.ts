import { Controller, Request, Post, UseGuards, Get, Body, Res, Req, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../../../controller/guards/jwt-auth.guard';
import { IUserService } from 'src/controller/service/user.service';
import { ApiHeader } from '@nestjs/swagger';
import { IMovieService } from 'src/controller/service/movie.service';


@Controller('movies')
export class MovieController {
  constructor(
    private _movieService: IMovieService,
  ) { }

  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token otorgado por el login',
    required: true,
  })
  @UseGuards(JwtAuthGuard)
  @Get(':tmdbId/reviews')
  getProfile(
    @Param('tmdbId') tmdbId: number,
    @Request() req) {
    return this._movieService.getMoviesReviews(tmdbId);
  }

}