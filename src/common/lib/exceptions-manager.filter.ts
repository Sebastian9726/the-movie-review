import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import * as moment from 'moment';
import { CrytoUtils } from './crypto-utils';
import { Console } from 'console';


@Catch()
export class ExceptionManager implements ExceptionFilter {
  // ...
  private CrytoUtils = new CrytoUtils();
  private readonly configService = new ConfigService();

  constructor(
    //@InjectBCSPinoLogger(ExceptionManager.name)
  ) {}

  async catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const req = ctx.getRequest();

    let result;
console.log("hay un error",exception)
    result = {
      ...result,
      requestTime: moment().format(),
      method: req.method,
    };

    response
      .setHeader(
        'Strict-Transport-Security',
        'max-age=31536000; includeSubDomains',
      )
      .status(result.status)
      .json(
        this.CrytoUtils.encryptData(
          JSON.stringify(result),
          this.configService.get('ENCRYPTKEY'),
        ),
      );
  }
}
