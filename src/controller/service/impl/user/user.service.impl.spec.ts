import { Test, TestingModule } from '@nestjs/testing';

// SERVICIOS PARA HACER MOCK
import { ConfigModule } from '@nestjs/config';

import { HttpClientModule } from '@bcs/http-client';
import { InterceptorCifradoModule } from '@bcs/interceptor-cifrado';

//importaciones para hacer mock de un servidor de mongo
import { MongoMemoryServer } from 'mongodb-memory-server';
import { ILoggerProvider } from '../../../../data-provider/logger.provider';
import { LoggerProvider } from '../../../../data-provider/provider/logger.provider.imp';
import { ICacheManagerService } from '../../../../data-provider/cache/cache-manager-service/cache-manager-service.provider';
import { CacheManagerService } from '../../../../data-provider/cache/cache-manager-service/impl/cache-manager-service.provider.impl';
import { Connection, connect, Model, Document } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import {
  MSDocumentLogModel,
  LogsSchema,
} from '../../../../data-provider/model/logger/logs.model';
//paquetes para hacer mock del servicio de cache con redis
import { CACHE_MANAGER } from '@nestjs/cache-manager';

import { DocumentsService } from './documents.service.impl';
import { IAuthValidate } from '../../../../core/entity/auth-validate/validate.entity';
import { EtypeDocument } from '../../../../common/utils/enums/params.enum';
import { CustomLoggerModule, loggerPinoConfig } from '@bcs/logger';
import { microServices } from '../../../../common/configuration/microservices-name';
import { IDocumentsService } from '../../documents.service';
import { IDocumentsUc } from '../../../../core/use-case/documents/documents.uc';
import databaseConfig from '../../../../common/configuration/database.config';

describe('Documents service', () => {
  let service: IDocumentsService;
  //objetos uasados para el mock de apis
  let cacheDB = {};

  //objetos para construir una simulación de base de datos en mongo
  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  //modelo de datos que usara la base de datos para crear una coleccion y documentos
  let loggerModel: Model<MSDocumentLogModel>;

  beforeAll(async () => {
    await createDBServer();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
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
      providers: [
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
        {
          provide: ICacheManagerService,
          useClass: CacheManagerService,
        },
        {
          provide: IDocumentsService,
          useClass: DocumentsService,
        },
      ],
    })
      .useMocker((token) => {
        if (token == IDocumentsUc) {
          return {
            validateDocuments: jest.fn().mockResolvedValue('data'),
          };
        }
      })
      .compile();
    service = module.get<IDocumentsService>(IDocumentsService);
  });

  /**
   * Creación de un servidor de bae de datos de pruebas Mongo
   * y del modelo que el servicio usara en su prueba
   */
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
    //axios.reset();
  });

  it('Controller documents customer defined', async () => {
    expect(service).toBeDefined();
  });

  it('Service get documents defined', async () => {
    const request = {
      documentNumber: '11212345',
      documentType: EtypeDocument.CC,
      ip: '127.0.0.1',
      processId:
        'U2FsdGVkX1857rUMwzZPtCFmwSfKoKVtcdMXpj6986TGxRHq3eCjLA3tg2l6J81+',
      logInfo: {
        'x-correlation-id': '',
        'x-message-id': '',
        'x-request-id': '',
      },
    } as IAuthValidate;
    const RESPONSE = await service.getDocuments(request);
    expect(RESPONSE).toBe('data');
  });
});
