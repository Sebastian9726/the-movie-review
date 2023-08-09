import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';

import { IUserProvider } from './provider/user.provider';
import { UserProvider } from './provider/impl/user.provider.impl';
import { UserModel } from './model/user/User.model';

@Module({
  imports: [

    //cache

    //Conexión a base de datos

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('PG_HOST'),
        port: configService.get<number>('PG_PORT'),
        username: configService.get('PG_USER'),
        password: configService.get('PG_PASSWORD'),
        database: configService.get('PG_DB'),
        //entities: [],
        autoLoadEntities:true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  TypeOrmModule.forFeature([UserModel])

  ],
  providers: [

{ provide: IUserProvider, useClass: UserProvider },

  ],
  exports: [
    IUserProvider
  ],
})
export class DataProviderModule {}
