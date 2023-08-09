import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { CommonModule } from './common/common.module';
import { ExceptionManager } from './common/lib/exceptions-manager.filter';
import { ControllerModule } from './controller/controller.module';
import { CoreModule } from './core/core.module';
import { DataProviderModule } from './data-provider/data-provider.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './data-provider/models/user/User.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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
            entities: [UserModel],
            autoLoadEntities:true,
            synchronize: true
          }),
          inject: [ConfigService],
        }),
    CommonModule,
    DataProviderModule,
    CoreModule,
    ControllerModule,
  ],
  controllers: [],
  providers: [ 
    {
      provide: APP_FILTER,
      useClass: ExceptionManager,
    },
  ],
})
export class AppModule {}
