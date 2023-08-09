import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { CommonModule } from './common/common.module';
import { ExceptionManager } from './common/lib/exceptions-manager.filter';
import { ControllerModule } from './controller/controller.module';
import { CoreModule } from './core/core.module';
import { DataProviderModule } from './data-provider/data-provider.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './data-provider/model/user/User.model';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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
