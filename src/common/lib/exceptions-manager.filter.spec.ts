import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import {
  BusinessException,
  returnExceptionSwagger,
} from './business-exceptions';
import { ExceptionManager } from './exceptions-manager.filter';
import { Response } from 'express';
import { Etask } from '../utils/enums/taks.enum';
import { HttpException } from '@nestjs/common';
import { ResponseService } from '../../controller/dto/response-service.dto';
import { EmessageMapping } from '../utils/enums/message.enum';
import { CustomLoggerModule, loggerPinoConfig } from '@bcs/logger';
import { microServices } from '../configuration/microservices-name';

describe('ExceptionManager', () => {
  let service: ExceptionManager;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        CustomLoggerModule.register(
          {
            service: microServices.CustomerDocuments,
          },
          {
            pinoHttp: [loggerPinoConfig(microServices.CustomerDocuments)],
          },
        ),
      ],
      providers: [ExceptionManager],
    }).compile();

    service = module.get<ExceptionManager>(ExceptionManager);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  const host = {
    getArgs: jest.fn().mockReturnThis(),
    getRequest: jest.fn().mockReturnThis(),
    getResponse: jest.fn().mockReturnThis(),
    getArgByIndex: jest.fn().mockReturnThis(),
    getType: jest.fn().mockReturnThis(),
    switchToHttp: jest.fn().mockReturnThis(),
    switchToRpc: jest.fn().mockReturnThis(),
    switchToWs: jest.fn().mockReturnThis(),
  };

  describe('catch', () => {
    it('catch BussinessException', async () => {
      // some logic here
      const exception: BusinessException = new BusinessException(
        500,
        'Excepcion',
        false,
        {
          context: 'prueba',
          task: Etask.EXCEPTION_MANAGER,
        },
      );
      (
        host.switchToHttp().getRequest as jest.Mock<any, any>
      ).mockReturnValueOnce({
        METHOD: 'POST',
        headers: {},
        body: {
          data: 'U2FsdGVkX1/PE3ZYiUv5sU7fdUxx7bkm9+0J8Ld0OtlKytxSLpWQG9hGj8FLVQSOF2rdSTWAG7/OP7qXHuF3pQ==',
        },
      });
      const response = {
        // mock props, methods you use
        setHeader: jest.fn().mockReturnValue({
          // mock props, methods you use
          status: jest.fn().mockReturnValue({
            json: jest.fn(),
          }),
        }),
      } as unknown as Response;
      (
        host.switchToHttp().getResponse as jest.Mock<any, any>
      ).mockReturnValueOnce(response);
      await service.catch(exception, host);
      expect(host.getResponse).toBeCalled();
    });

    it('catch BussinessException empty', async () => {
      // some logic here
      const exception: BusinessException = new BusinessException(
        500,
        '',
        undefined,
        undefined,
      );
      (
        host.switchToHttp().getRequest as jest.Mock<any, any>
      ).mockReturnValueOnce({
        METHOD: 'POST',
        headers: {},
        body: {
          data: 'U2FsdGVkX1/PE3ZYiUv5sU7fdUxx7bkm9+0J8Ld0OtlKytxSLpWQG9hGj8FLVQSOF2rdSTWAG7/OP7qXHuF3pQ==',
        },
      });
      const response = {
        // mock props, methods you use
        setHeader: jest.fn().mockReturnValue({
          // mock props, methods you use
          status: jest.fn().mockReturnValue({
            json: jest.fn(),
          }),
        }),
      } as unknown as Response;
      (
        host.switchToHttp().getResponse as jest.Mock<any, any>
      ).mockReturnValueOnce(response);
      await service.catch(exception, host);
      expect(host.getResponse).toBeCalled();
    });

    it('catch HTTPException', async () => {
      // some logic here
      const exception: HttpException = new HttpException(
        'error de excepcion',
        500,
      );
      (
        host.switchToHttp().getRequest as jest.Mock<any, any>
      ).mockReturnValueOnce({
        METHOD: 'POST',
        headers: {},
        body: {
          data: 'U2FsdGVkX1/PE3ZYiUv5sU7fdUxx7bkm9+0J8Ld0OtlKytxSLpWQG9hGj8FLVQSOF2rdSTWAG7/OP7qXHuF3pQ==',
        },
      });
      const response = {
        // mock props, methods you use
        setHeader: jest.fn().mockReturnValue({
          // mock props, methods you use
          status: jest.fn().mockReturnValue({
            json: jest.fn(),
          }),
        }),
      } as unknown as Response;
      (
        host.switchToHttp().getResponse as jest.Mock<any, any>
      ).mockReturnValueOnce(response);
      await service.catch(exception, host);
      expect(host.getResponse).toBeCalled();
    });

    it('catch GeneralException', async () => {
      // some logic here
      const exception: Error = new Error('error de excepcion');
      (
        host.switchToHttp().getRequest as jest.Mock<any, any>
      ).mockReturnValueOnce({
        METHOD: 'POST',
        headers: {},
        body: {
          data: 'U2FsdGVkX1/PE3ZYiUv5sU7fdUxx7bkm9+0J8Ld0OtlKytxSLpWQG9hGj8FLVQSOF2rdSTWAG7/OP7qXHuF3pQ==',
        },
      });
      const response = {
        // mock props, methods you use
        setHeader: jest.fn().mockReturnValue({
          // mock props, methods you use
          status: jest.fn().mockReturnValue({
            json: jest.fn(),
          }),
        }),
      } as unknown as Response;
      (
        host.switchToHttp().getResponse as jest.Mock<any, any>
      ).mockReturnValueOnce(response);
      await service.catch(exception, host);
      expect(host.getResponse).toBeCalled();
    });

    it('get ResponseService without params', async () => {
      // some logic here
      const responserSeerive = new ResponseService();
      expect(responserSeerive.success).toBe(true);
      expect(responserSeerive.message).toBe(EmessageMapping.DEFAULT);
      expect(responserSeerive.status).toBe(200);
    });

    it('define exception documentation', async () => {
      // some logic here
      const responserService = returnExceptionSwagger([
        {
          CODE: 500,
          CODEEXCEPTION: 'E-01',
          DESCRIPTIONSWAGGER: 'error de ejemplo',
        },
      ]);
      expect(responserService).toBeDefined();
    });
  });
});
