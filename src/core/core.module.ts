
//libraries
import { Module } from '@nestjs/common';

//moduls
import { DataProviderModule } from '../data-provider/data-provider.module';

//commons


//Interfaces
import { IUserUc } from './use-case/user/user.uc';

//implementations
import { UserUc } from './use-case/user/impl/user.uc.impl';
import { IUserTransformUcRe } from './use-case/resources/user/transform.uc';
import { UserTransformUcRe } from './use-case/resources/user/impl/transform.uc.impl';
import { ReviewUc } from './use-case/review/impl/review.uc.impl';
import { IReviewUc } from './use-case/review/review.uc';
import { IMovieUc } from './use-case/movie/movie.uc';
import { MovieUc } from './use-case/movie/impl/movie.uc.impl';


@Module({
  imports: [
    DataProviderModule,
  ],
  providers: [
   { provide: IUserUc, useClass: UserUc },
   { provide: IReviewUc, useClass: ReviewUc },
   { provide: IMovieUc, useClass: MovieUc },
   //The Resources does not export 
   //{ provide: IUserTransformUcRe, useClass: UserTransformUcRe },
   
  ],

  exports: [
    IUserUc,
    IReviewUc,
    IMovieUc
  ],
})
export class CoreModule {}
