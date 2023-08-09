
//libraries
import { Module } from '@nestjs/common';

//moduls
import { DataProviderModule } from '../data-provider/data-provider.module';

//commons


//Interfaces
import { IUserUc } from './use-case/user/save-document.uc';

//implementations
import { UserUc } from './use-case/user/impl/save-documents.uc.impl';
import { IUserTransformUcRe } from './use-case/resources/user/transform.uc';
import { UserTransformUcRe } from './use-case/resources/user/impl/transform.uc.impl';


@Module({
  imports: [
    DataProviderModule,
  ],
  providers: [
   { provide: IUserUc, useClass: UserUc },
   //The Resources does not export 
   { provide: IUserTransformUcRe, useClass: UserTransformUcRe },
   
  ],

  exports: [
    IUserUc,
  ],
})
export class CoreModule {}
