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
    result = {
      ...result,
      requestTime: moment().format(),
      method: req.method,
      message: exception
    };

    response
      .setHeader(
        'Strict-Transport-Security',
        'max-age=31536000; includeSubDomains',
      )
      .status(exception.status? exception.status : HttpStatus.INTERNAL_SERVER_ERROR)
      .json(

        result/*
        this.CrytoUtils.encryptData(
          JSON.stringify(result),
          this.configService.get('ENCRYPTKEY'),
        ),*/
      );
  }
}
