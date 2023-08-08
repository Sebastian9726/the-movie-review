import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@bcs/http-client/node_modules/@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { HttpClientModule } from '@bcs/http-client';
//importaciones para hacer mock de un servidor de mongo
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection, connect, Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { ILoggerProvider } from '../../../../data-provider/logger.provider';
import { LoggerProvider } from '../../../../data-provider/provider/logger.provider.imp';
import { ICacheManagerService } from '../../../../data-provider/cache/cache-manager-service/cache-manager-service.provider';
import { CacheManagerService } from '../../../../data-provider/cache/cache-manager-service/impl/cache-manager-service.provider.impl';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { InterceptorCifradoModule } from '@bcs/interceptor-cifrado';
import { ICoreApiAuthProvider } from '../../../../data-provider/core-api-auth.provider';
import { CoreApiAuthProvider } from '../../../../data-provider/provider/core-api-auth.provider.impl';
import {
  LogsSchema,
  MSDocumentLogModel,
} from '../../../../data-provider/model/logger/logs.model';
import { IAuthValidate } from '../../../entity/auth-validate/validate.entity';
import { BusinessException } from '../../../../common/lib/business-exceptions';
import { CustomLoggerModule, loggerPinoConfig } from '@bcs/logger';
import { microServices } from '../../../../common/configuration/microservices-name';
import { ISaveDocumentsUc } from '../save-document.uc';
import { SaveDocumentsUc } from './save-documents.uc.impl';
import { ISaveDocumentProvider } from '../../../../data-provider/save-document/save-document.provider';
import { CrytoUtils } from '../../../../common/lib/crypto-utils';
import { SAVE_DOCUMENTS_RESPONSE } from '../../../../common/utils/enums/mocks-document-customer.enum';
import {
  ApisGroupEnum,
  DocumentoUploadResponseDto,
  GovIssueIdentTypeEnum,
} from '@bcs/types';
import { SaveDocumentControllerDto } from '../../../../controller/dto/document/save-document.dto';
import { plainToInstance } from 'class-transformer';
import databaseConfig from '../../../../common/configuration/database.config';

describe('Save documents useCase', () => {
  //objeto del servicio que ejecutará la prueba
  let useCase: ISaveDocumentsUc;
  let cacheDB = {};

  //objetos para construir una simulación de base de datos en mongo
  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  //modelo de datos que usara la base de datos para crear una coleccion y documentos
  let loggerModel: Model<MSDocumentLogModel>;

  //objetos uasados para el mock de apis
  let httpService: HttpService;

  const body = {
    document: '100000000',
    govIssueIdent: {
      govIssueIdentType: GovIssueIdentTypeEnum.CITIZENSHIP_CARD,
      identSerialNum: '20545845',
    },
    documentExpeditionDay: '15/08/2020',
  } satisfies SaveDocumentControllerDto;

  const params = {
    documentType: 'CC',
    documentNumber: '15748744',
    ip: '192.168.2.5',
    processId:
      'U2FsdGVkX19bM2iwFrRSCLd/oQBnUcJYS15OniirgDDLlV0sgZ3u2X/iz0BRRUHF',
    authHeader: 'eretee343',
    logInfo: {
      'x-correlation-id': '',
      'x-message-id': '',
      'x-request-id': '',
    },
  } as IAuthValidate;

  beforeAll(async () => {
    await createDBServer();
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        HttpClientModule.register({}),
        CustomLoggerModule.register(
          {
            service: microServices.CustomerDocuments,
          },
          {
            pinoHttp: [loggerPinoConfig(microServices.CustomerDocuments)],
          },
        ),
        InterceptorCifradoModule.register({
          key: process.env.ENCRYPTKEY,
          mulesoftKey: process.env.ENCRYPTMULESOFTKEY,
        }),
      ],
      controllers: [],
      providers: [
        CrytoUtils,
        {
          provide: getModelToken(
            MSDocumentLogModel.name,
            databaseConfig.documentDB,
          ),
          useValue: loggerModel,
        },
        {
          provide: CACHE_MANAGER,
          useValue: {
            store: {
              client: {
                get: (field) => {
                  return cacheDB[field];
                },
              },
            },
            get: (field) => {
              return cacheDB[field];
            },
            set: (field, value) => {
              cacheDB[field] = value;
            },
          },
        },
        { provide: ILoggerProvider, useClass: LoggerProvider },
        { provide: ICoreApiAuthProvider, useClass: CoreApiAuthProvider },
        { provide: ISaveDocumentsUc, useClass: SaveDocumentsUc },
        { provide: ICacheManagerService, useClass: CacheManagerService },
      ],
    })
      .useMocker((token) => {
        if (token == ISaveDocumentProvider) {
          return {
            requestSaveDocument: jest
              .fn()
              .mockResolvedValue(
                plainToInstance(
                  DocumentoUploadResponseDto,
                  SAVE_DOCUMENTS_RESPONSE,
                  { groups: [ApisGroupEnum.documents.uploadDocument.response] },
                ),
              ),
          };
        }
      })
      .compile();
    httpService = module.get<HttpService>(HttpService);
    useCase = module.get<ISaveDocumentsUc>(ISaveDocumentsUc);
  });

  const createDBServer = async () => {
    mongod = global.mongod;
    mongoConnection = global.mongoConnection;
    loggerModel = mongoConnection.model(MSDocumentLogModel.name, LogsSchema);
  };

  const dropCollections = async () => {
    const collections = await mongoConnection.db.collections();
    for (const collection of collections) {
      if (collection.collectionName !== 'system.version')
        mongoConnection.db.dropCollection(collection.collectionName);
    }
  };

  afterEach(async () => {
    await dropCollections();
    cacheDB = {};
  });

  it('Viability data useCase should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('Viability data useCase should be return succesfull', async () => {
    const RESPONSE = await useCase.saveDocuments(body, params);
    expect(RESPONSE).toBeInstanceOf(DocumentoUploadResponseDto);
  });
});
