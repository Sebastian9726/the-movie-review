import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
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
  ): Promise<any> {

    const { documentNumber, documentType } = payload;
    return  {
      documentNumber,
      documentType,
    }

  }
}
