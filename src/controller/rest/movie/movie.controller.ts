import { Controller, Request, Post, UseGuards, Get, Body, Res, Req, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../../../controller/guards/jwt-auth.guard';
import { IUserService } from 'src/controller/service/user.service';
import { ApiHeader } from '@nestjs/swagger';


@Controller('movies')
export class MovieController {
  constructor(
    private userService: IUserService,
  ) { }

  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token otorgado por el login',
    required: true,
  })
  @UseGuards(JwtAuthGuard)
  @Get(':tmdbId/reviews')
  getProfile(
    @Param('tmdbId') tmdbId: string,
    @Request() req) {
    return this.userService.getProfile(tmdbId);
  }

}