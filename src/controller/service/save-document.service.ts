import { Injectable } from '@nestjs/common';
import { IAuthValidate } from '../../core/entity/auth-validate/validate.entity';
import { SaveDocumentControllerDto } from '../dto/document/save-document.dto';
import { DocumentoUploadResponseDto } from '@bcs/types';

@Injectable()
export abstract class ISaveDocumentsService {
  /**
   * 'Almacenar propios del producto de libranza'
   * @param _saveDocumentControllerDto datos para diligenciar el documento
   * @param _validate datos del cliente
   */
  abstract saveDocuments(
    _saveDocumentControllerDto: SaveDocumentControllerDto,
    _validate: IAuthValidate,
  ): Promise<DocumentoUploadResponseDto>;
}
