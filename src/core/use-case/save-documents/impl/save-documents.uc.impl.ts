import { Injectable } from '@nestjs/common';
import { IAuthValidate } from '../../../entity/auth-validate/validate.entity';
import { IBCSLoggerService, InjectBCSPinoLogger } from '@bcs/logger';
import utils from '../../../../common/utils/utils';
import { ISaveDocumentsUc } from '../save-document.uc';
import { ISaveDocumentProvider } from '../../../../data-provider/save-document/save-document.provider';
import { SaveDocumentControllerDto } from 'src/controller/dto/document/save-document.dto';
import { DocumentoUploadResponseDto, GovIssueIdentDto } from '@bcs/types';
import { plainToInstance } from 'class-transformer';
import { EncryptorService } from '@bcs/interceptor-cifrado';

@Injectable()
export class SaveDocumentsUc implements ISaveDocumentsUc {
  private static readonly LEDGERPAYROLL = '30';
  private static readonly SUBLEDGERPAYROLL = '01';
  private static readonly GROUPPAYROLL = '33'; //300133
  constructor(
    private readonly _saveDocumentProvider: ISaveDocumentProvider,
    @InjectBCSPinoLogger(SaveDocumentsUc.name)
    private readonly logger: IBCSLoggerService,
    private readonly encryptorService: EncryptorService,
  ) {}

  async saveDocuments(
    _saveDocumentControllerDto: SaveDocumentControllerDto,
    _validate: IAuthValidate,
  ): Promise<DocumentoUploadResponseDto> {
    this.logger.log(
      'Consult data viability',
      utils.getLogInfo(_validate.logInfo, this.saveDocuments.name),
    );
    _validate.processId = JSON.parse(
      this.encryptorService.decryptBody(_validate.processId),
    );
    const BODY_SAVE_DOCUMENT = {
      property: [
        {
          value: _saveDocumentControllerDto.govIssueIdent.govIssueIdentType,
          name: 'xTipoID',
        },
        {
          value: _saveDocumentControllerDto.govIssueIdent.identSerialNum,
          name: 'xNumeroID',
        },
        {
          value: 'T0131',
          name: 'xTipoDocumento',
        },
        {
          value: _saveDocumentControllerDto.documentExpeditionDay,
          name: 'xFechaExpedicion',
        },
        {
          value: '9999',
          name: 'xCodigoOficina',
        },
      ],
      file: {
        documentName: _validate.processId,
        fileId: _saveDocumentControllerDto.govIssueIdent.identSerialNum,
        fileType: 'Document',
        fileTittle: _validate.processId,
        fileName: _validate.processId + '.pdf',
        fileBase64: _saveDocumentControllerDto.document,
        fileSecurityGroup: 'Public',
        fileCreationUser:
          _saveDocumentControllerDto.govIssueIdent.govIssueIdentType +
          _saveDocumentControllerDto.govIssueIdent.identSerialNum,
        fileStageCode: '07',
        fileProcessCode: '03',
      },
      depAcctStmtRec: {
        product: {
          acctId: '',
          product: {
            productType: 'AHORROS',
            productId: 'Cuenta Amiga',
            acctId: '24026781578',
            handlingType: 'Plastico',
            handlingId: '2254670145980109',
          },
        },
      },
      product: {
        productId: {
          group: '1',
          subLeger: '4',
          ledger: '3',
        },
      },
    };

    const govIssueIdent = plainToInstance(GovIssueIdentDto, {
      govIssueIdentType:
        _saveDocumentControllerDto.govIssueIdent.govIssueIdentType,
      identSerialNum: _saveDocumentControllerDto.govIssueIdent.identSerialNum,
    });

    const GET_viabilityData =
      await this._saveDocumentProvider.requestSaveDocument(
        govIssueIdent,
        BODY_SAVE_DOCUMENT,
        _validate,
      );

    return GET_viabilityData;
  }
}
