import { Injectable } from '@nestjs/common';
import { IAuthValidate } from '../../../core/entity/auth-validate/validate.entity';
import { SaveDocumentControllerDto } from '../../../controller/dto/document/save-document.dto';
import { DocumentoUploadResponseDto } from '@bcs/types';

@Injectable()
export abstract class ISaveDocumentsUc {
  abstract saveDocuments(
    _documentInfo: SaveDocumentControllerDto,
    _validate: IAuthValidate,
  ): Promise<DocumentoUploadResponseDto>;
}
