import { Injectable, Logger } from '@nestjs/common';
import { IAuthValidate } from '../../../../core/entity/auth-validate/validate.entity';
import * as util from 'util';
import { IBCSLoggerService, InjectBCSPinoLogger } from '@bcs/logger';
import utils from '../../../../common/utils/utils';
import { ISaveDocumentsService } from '../../save-document.service';
import { SaveDocumentControllerDto } from '../../../../controller/dto/document/save-document.dto';
import { ISaveDocumentsUc } from '../../../../core/use-case/save-documents/save-document.uc';
import { DocumentoUploadResponseDto } from '@bcs/types';

@Injectable()
export class SaveDocumentsService implements ISaveDocumentsService {
  constructor(
    private readonly _saveDocumentsUc: ISaveDocumentsUc,
    @InjectBCSPinoLogger(SaveDocumentsService.name)
    private readonly logger: IBCSLoggerService,
  ) {}

  async saveDocuments(
    saveDocumentControllerDto: SaveDocumentControllerDto,
    validate: IAuthValidate,
  ): Promise<DocumentoUploadResponseDto> {
    this.logger.log(
      'GET documents',
      utils.getLogInfo(validate.logInfo, this.saveDocuments.name),
    );
    this.logger.log(
      util.inspect(validate, false, null, true),
      utils.getLogInfo(validate.logInfo, this.saveDocuments.name),
    );
    const RESPONSE = await this._saveDocumentsUc.saveDocuments(
      saveDocumentControllerDto,
      validate,
    );
    this.logger.log(
      { 'GET documents data response': RESPONSE },
      utils.getLogInfo(validate.logInfo, this.saveDocuments.name),
    );
    return RESPONSE;
  }
}
