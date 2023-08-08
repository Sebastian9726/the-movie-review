import { Module } from '@nestjs/common';
import databaseConfig from '../common/configuration/database.config';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { microServices } from '../common/configuration/microservices-name';

@Module({
  imports: [
    ConfigModule.forRoot(),
    //cache

    //Conexión a base de datos

  ],
  providers: [

   // { provide: IViabilityDataProvider, useClass: ViabilityDataProvider },

  ],
  exports: [
    //IViabilityDataProvider,
  ],
})
export class DataProviderModule {}
