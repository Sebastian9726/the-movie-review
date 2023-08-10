import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IUserProvider } from './provider/user.provider';
import { UserProvider } from './provider/impl/user.provider.impl';
import { UserModel } from './models/user/User.entity';
import { HttpModule } from '@nestjs/axios';
import { IApiMoviesProvider } from './provider/api-movies';
import { ApiMoviesProvider } from './provider/impl/api-movies.provider.impl';
import { ReviewModel } from './models/review/Review.entity';
import { MovieModel } from './models/movie/Movie.entity';
import { IReviewProvider } from './provider/review.provider';
import { ReviewProvider } from './provider/impl/review.provider.impl';
import { IMovieProvider } from './provider/movie.provider';
import { MovieProvider } from './provider/impl/movie.provider.impl';


@Module({
  imports: [
    //http
    HttpModule,

    //cache


  TypeOrmModule.forFeature([UserModel,ReviewModel,MovieModel],)

  ],
  providers: [

{ provide: IUserProvider, useClass: UserProvider },
{ provide: IReviewProvider, useClass: ReviewProvider },
{ provide: IMovieProvider, useClass: MovieProvider },
{ provide: IApiMoviesProvider, useClass: ApiMoviesProvider },

  ],
  exports: [
    IUserProvider,
    IReviewProvider,
    IMovieProvider
  ],
})
export class DataProviderModule {}
