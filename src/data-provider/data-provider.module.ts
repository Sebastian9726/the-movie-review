import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';

import { IUserProvider } from './provider/user.provider';
import { UserProvider } from './provider/impl/user.provider.impl';
import { UserModel } from './models/user/User.entity';


@Module({
  imports: [

    //cache


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
