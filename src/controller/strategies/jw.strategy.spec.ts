import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationService } from './jwt.strategy';
import { CrytoUtils } from '../../common/lib/crypto-utils';
import { IJWTCacheManagerService } from '../../data-provider/cache-jwt-token/cache-jwt-token.provider';
import { BusinessException } from '../../common/lib/business-exceptions';
import { ESessionDisabledError } from '../../common/utils/enums/session-exception-enum';
import { IncomingMessage } from 'http';

describe('Jwt strategies', () => {
  let service: AuthenticationService;
  const request: IncomingMessage = {
    aborted: false,
    httpVersion: '',
    httpVersionMajor: 0,
    httpVersionMinor: 0,
    complete: false,
    connection: undefined,
    socket: undefined,
    headers: {
      authorization: '',
    },
    rawHeaders: [],
    trailers: undefined,
    rawTrailers: [],
    setTimeout: jest.fn().mockReturnThis(),
    destroy: jest.fn().mockReturnThis(),
    id: '',
    log: undefined,
    allLogs: [],
    readableAborted: false,
    readable: false,
    readableDidRead: false,
    readableEncoding: undefined,
    readableEnded: false,
    readableFlowing: false,
    readableHighWaterMark: 0,
    readableLength: 0,
    readableObjectMode: false,
    destroyed: false,
    _read: jest.fn().mockReturnThis(),
    read: jest.fn().mockReturnThis(),
    setEncoding: jest.fn().mockReturnThis(),
    pause: jest.fn().mockReturnThis(),
    resume: jest.fn().mockReturnThis(),
    isPaused: jest.fn().mockReturnThis(),
    unpipe: jest.fn().mockReturnThis(),
    unshift: jest.fn().mockReturnThis(),
    wrap: jest.fn().mockReturnThis(),
    push: jest.fn().mockReturnThis(),
    _destroy: jest.fn().mockReturnThis(),
    addListener: jest.fn().mockReturnThis(),
    emit: jest.fn().mockReturnThis(),
    on: jest.fn().mockReturnThis(),
    once: jest.fn().mockReturnThis(),
    prependListener: jest.fn().mockReturnThis(),
    prependOnceListener: jest.fn().mockReturnThis(),
    removeListener: jest.fn().mockReturnThis(),
    [Symbol.asyncIterator]: jest.fn().mockReturnThis(),
    pipe: jest.fn().mockReturnThis(),
    off: jest.fn().mockReturnThis(),
    removeAllListeners: jest.fn().mockReturnThis(),
    setMaxListeners: jest.fn().mockReturnThis(),
    getMaxListeners: jest.fn().mockReturnThis(),
    listeners: jest.fn().mockReturnThis(),
    rawListeners: jest.fn().mockReturnThis(),
    listenerCount: jest.fn().mockReturnThis(),
    eventNames: jest.fn().mockReturnThis(),
    headersDistinct: undefined,
    trailersDistinct: undefined,
    closed: false,
    errored: undefined,
    compose: undefined,
  };
  let tokenAvailable = true;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [CrytoUtils, AuthenticationService],
    })
      .useMocker((token) => {
        if (token == IJWTCacheManagerService) {
          return {
            validateRedisjwt: jest
              .fn()
              .mockImplementation(() => tokenAvailable),
          };
        }
      })
      .compile();

    service = module.get<AuthenticationService>(AuthenticationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return payload', async () => {
    const data = await service.validate(request, {
      ENCRYPTED_TOKEN_DATA:
        'U2FsdGVkX19TN4FZKHjjppNHfKz8obpCjO2GKXBucHchDeEr/6hdUr7C6mgRtgFwedHthGG0Ka/DY97WpvYNpw+5ZkwkpaOjfCgs8uo32Eh9OaXjM/0V0vSL/i8GcTOY',
      iat: 1670251748,
      exp: 1670255348,
    });

    expect(data.documentType).toBe('CC');
    expect(data.documentNumber).toBe('93355310');
  });

  it('should throw E-00 for customer session disabled', async () => {
    tokenAvailable = false;
    try {
      await service.validate(request, {
        ENCRYPTED_TOKEN_DATA:
          'U2FsdGVkX19TN4FZKHjjppNHfKz8obpCjO2GKXBucHchDeEr/6hdUr7C6mgRtgFwedHthGG0Ka/DY97WpvYNpw+5ZkwkpaOjfCgs8uo32Eh9OaXjM/0V0vSL/i8GcTOY',
        iat: 1670251748,
        exp: 1670255348,
      });
      expect(true).toBe(false);
    } catch (e) {
      expect(e).toBeInstanceOf(BusinessException);
      expect(e.description).toBe(ESessionDisabledError.DESCRIPTION);
    }
  });

  it('should return error', async () => {
    try {
      const data = await service.validate(request, {
        ENCRYPTED_TOKEN_DATA: 'error',
      });
    } catch (e) {
      expect(e.message).toBe('Invalid credentials');
    }
  });
});
