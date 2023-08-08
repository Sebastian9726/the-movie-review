export const CONTACT_DATA = {
  customerKey: 'h124',
  processId: '23',
  microService: 'Servicio',
  activity: 'Save contact data',
  ip: '192.168.0.130',
  city: 'Bogota',
  phoneNumber: '3138726824',
  totalMonthlyIncome: 2,
  totalDiscountsHealth: 8,
  totalOtherVoucherDiscounts: 7,
  branchOffice: '11011',
};

export const EXEPTION_DOCUMENT = {
  status: {
    statusDesc: 'OK',
  },
  responseDetail: {
    errorCode: '',
    errorDesc: '',
    errorType: '',
  },
  govIssueIdent: {
    govIssueIdentType: 'CC',
    identSerialNum: '1234567890',
  },
  depAcctStmtRec: {
    depAcctId: {
      refNumber: '01',
    },
  },
  Offer: {
    requestType: '01',
    requestVersion: '01',
  },
  aplicantInfo: {
    govIssueIdent: {
      govIssueIdentType: 'CC',
      identSerialNum: '1234567890',
    },
    flagIncomeValidation: 'Y',
  },
};

export const RULE_DOCUMENT = {
  listOrderRS: [
    {
      catalogueInfo: {
        numOrder: '1',
      },
    },
  ],
  listDocument: [
    {
      documentInfo: {
        codeDocRequired: '1',
        nameDocument: '1',
        nameSegment: '1',
        incomeSegment: '1',
        certifiesSegment: '1',
        govIssueIdent: {
          identSerialNum: '1234567890',
          govIssueIdentType: 'CC',
        },
        product: {
          descProduct: '1',
        },
        depAcctId: {
          acctId: '1',
        },
        exceptionGrounds: '1',
      },
    },
  ],
  listGroupDocuments: [
    {
      code: '1',
      description: '1',
      minimumRequired: '1',
      documentInfo: {
        codeProcess: '1',
        sendingFormat: '1',
        productId: {
          ledgercode: '1',
          subLedgerCode: '1',
          groupCode: '1',
        },
        codeSegment: '1',
        exists: '1',
        obligation: '1',
        origen: '1',
        uploadDocumentManager: '1',
        participant: '1',
        action: '1',
        product: {
          productType: '1',
          amtRequested: '1',
        },
        stage: '1',
        code: '1',
        codeClassRev: '1',
        revisionCode: '1',
        digitizeOffice: '1',
        flag: '1',
        format: '1',
        listProperty: [
          {
            property: {
              code: '1',
              desc: '1',
              status: '1',
              name: '1',
              value: '1',
              indicator: '1',
            },
          },
        ],
        signatureRequired: '1',
        footprintRequired: '1',
        type: '1',
        typeDocumentary: '1',
        documentValidity: '1',
        documentaryTypeDescription: '1',
        listDocumentValidations: [
          {
            valid: {
              code: '1',
              description: '1',
              status: '1',
              name: '1',
              value: '1',
              indicator: '1',
            },
            validity: {
              code: '1',
              description: '1',
              status: '1',
              name: '1',
              value: '1',
              indicator: '1',
            },
            observations: '1',
            code: '1',
            idType: '1',
            description: '1',
          },
        ],
        documentCondition: '1',
        requested: '1',
        indClientValid: '1',
        destinationCredit: '1',
        businessInfo: {
          ocupation: '1',
        },
      },
    },
  ],
  listRsAdvisorContact: [
    {
      adviser: {
        idContact: '1',
        adviserContactStatus: '1',
        adviserType: '1',
        processCode: '1',
        stageCode: '1',
      },
    },
  ],
};
