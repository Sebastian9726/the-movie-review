import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

import { AuthValidatedDto } from '../dto/auth-validated.dto';
import { plainToInstance } from 'class-transformer';
import { IncomingMessage } from 'http';


@Injectable()
export class AuthenticationService extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWTSECRET'),
      passReqToCallback: true,
    });
  }

  async validate(
    req: IncomingMessage,
    payload: any,
  ): Promise<AuthValidatedDto> {

    const { documentNumber, documentType } = payload;
    return plainToInstance(AuthValidatedDto, {
      documentNumber,
      documentType,
    });

  }
}
