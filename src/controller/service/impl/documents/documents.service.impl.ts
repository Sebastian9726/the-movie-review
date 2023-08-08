import { Injectable, Logger } from '@nestjs/common';
import { IAuthValidate } from '../../../../core/entity/auth-validate/validate.entity';
import * as util from 'util';
import { IBCSLoggerService, InjectBCSPinoLogger } from '@bcs/logger';
import utils from '../../../../common/utils/utils';
import { IDocumentsService } from '../../documents.service';
import { IDocumentsUc } from '../../../../core/use-case/documents/documents.uc';

@Injectable()
export class DocumentsService implements IDocumentsService {
  constructor(
    private readonly _documentsUc: IDocumentsUc,
    @InjectBCSPinoLogger(DocumentsService.name)
    private readonly logger: IBCSLoggerService,
  ) {}

  async getDocuments(_validate: IAuthValidate): Promise<any> {
    this.logger.log(
      'GET documents',
      utils.getLogInfo(_validate.logInfo, this.getDocuments.name),
    );
    this.logger.log(
      util.inspect(_validate, false, null, true),
      utils.getLogInfo(_validate.logInfo, this.getDocuments.name),
    );
    const RESPONSE = await this._documentsUc.validateDocuments(_validate);
    this.logger.log(
      { 'GET documents data response': RESPONSE },
      utils.getLogInfo(_validate.logInfo, this.getDocuments.name),
    );
    return RESPONSE;
  }
}
