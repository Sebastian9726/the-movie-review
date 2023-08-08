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
import { ResponseService } from '../../controller/dto/response-service.dto';
import { EmessageMapping } from '../utils/enums/message.enum';
import GeneralUtil from '../utils/utils';
import { BusinessException } from './business-exceptions';
import { CrytoUtils } from './crypto-utils';
import { IBCSLoggerService, InjectBCSPinoLogger } from '@bcs/logger';
import utils from '../utils/utils';

@Catch()
export class ExceptionManager implements ExceptionFilter {
  // ...
  private CrytoUtils = new CrytoUtils();
  private readonly configService = new ConfigService();

  constructor(
    @InjectBCSPinoLogger(ExceptionManager.name)
  ) {}

  async catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const req = ctx.getRequest();

    let result: ResponseService;

    if (exception instanceof BusinessException)
      result = new ResponseService(
        exception.success,
        exception.details?.codMessage || exception.description,
        exception.code,
        exception.details?.document,
      );
    else if (exception instanceof HttpException)
      result = new ResponseService(
        false,
        EmessageMapping.DEFAULT_ERROR,
        exception.getStatus(),
        exception.getResponse()['message'],
      );
    else
      result = new ResponseService(
        false,
        EmessageMapping.DEFAULT_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    const origen: string = GeneralUtil.getOrigin(req['url']);

    result = {
      ...result,
      requestTime: moment().format(),
      method: req.method,
      origen,
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
