import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationService } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { IUserService } from './service/user.service';
import { UserService } from './service/impl/user/user.service.impl';
import { UserController } from './rest/user/user.controller';
import { ReviewController } from './rest/review/review.controller';
import { MovieController } from './rest/movie/movie.controller';
import { ReviewService } from './service/impl/review/review.service.impl';
import { IReviewService } from './service/review.service';
import { MovieService } from './service/impl/movie/movie.service.impl';
import { IMovieService } from './service/movie.service';

@Module({
  imports: [
    CoreModule,
    TerminusModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWTSECRET'),
        signOptions: { expiresIn: configService.get('JWTDURATION') },
      }),
    }),
  ],
  controllers: [
    UserController,
    MovieController,
    ReviewController
  ],
  providers: [
    AuthenticationService,
    { provide: IUserService, useClass: UserService },
    { provide: IReviewService, useClass: ReviewService },
    { provide: IMovieService, useClass: MovieService },
  ],
})
export class ControllerModule {}
