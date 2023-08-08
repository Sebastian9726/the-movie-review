import { Injectable } from '@nestjs/common';
import { IAuthValidate } from '../../core/entity/auth-validate/validate.entity';
import { SaveDocumentControllerDto } from '../dto/document/save-document.dto';

@Injectable()
export abstract class IDocumentsService {
  /**
   * 'Consultar documentos propios del producto de libranza'
   * @param _validate datos del cliente
   */
  abstract getDocuments(_validate: IAuthValidate): Promise<any>;
}
