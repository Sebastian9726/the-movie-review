
//libraries
import { Module } from '@nestjs/common';

//moduls
import { DataProviderModule } from '../data-provider/data-provider.module';

//commons
import { microServices } from '../common/configuration/microservices-name';

//Interfaces
//import { IDocumentsUc } from './use-case/documents/documents.uc';



//implementations
//import { DocumentsUc } from './use-case/documents/impl/documents.uc.impl';


@Module({
  imports: [
    DataProviderModule,
  ],
  providers: [
   // { provide: IDocumentsUc, useClass: DocumentsUc },
  
  ],

  exports: [
   // IDocumentsUc,
  ],
})
export class CoreModule {}
