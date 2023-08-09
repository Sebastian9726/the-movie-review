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
    UserController
  ],
  providers: [
    AuthenticationService,
    { provide: IUserService, useClass: UserService },
  ],
})
export class ControllerModule {}
