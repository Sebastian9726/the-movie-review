import { AxiosResponse } from '@nestjs/terminus/dist/health-indicator/http/axios.interfaces';
import { JobAgreementValidationDto } from 'src/controller/dto/job-agreement-validation/job-agreement-validation.dto';

export const RESULTTOKENAPI: AxiosResponse = {
  data: {
    access_token:
      '7HXIr9c2RdOyO_PmHWiMoXHk5DFgnOimA5f3AE2QTG_PQiwzQqhyuKf5bqCkmfIQuA5dkESL0lmKLs3IKaNeJw',
    token_type: 'Bearer',
    expires_in: 3600,
  },
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
};

export const SUCCESSBLACKLISTMANAGEMENTREQUEST = {
  govIssueIdent: {
    identSerialNum: '73202897',
    govIssueIdentType: 'CC',
  },
  depAcctStmtRec: {
    depAcctId: {
      refNumber: '550100000000001',
    },
  },
  productInfo: [
    {
      productId: {
        ledgerCode: '30',
        subLedgerCode: '01',
        groupCode: '21',
      },
      priority: '1',
      itemOrder1: '1',
      itemOrder2: '0',
      productTA: '300121',
      productType: 'activo',
      productClass: '01',
      businessGrade: 'TNNT',
      entpr: {
        entprType: '10',
        strategyType: '',
        entprId: '10001906',
        strategyId: '1',
      },
      termUnits: '1',
      vlrRentingMortagage: '1',
    },
  ],

  offer: {
    requestType: 'Sales Order',
    requestVersion: '1',
    processStage: '02',
    cityId: '11001',
    momentIndicator: '1',
    executionLine: 'C',
    indCampana: 'N',
    campaignId: '',
  },
  applicantInfo: [
    {
      govIssueIdent: {
        identSerialNum: '1077970977',
        govIssueIdentType: 'CC',
      },
      personName: {
        lastName: 'RUIZ',
        secondLastName: '',
        firstName: 'YUDY',
        middleName: '',
      },
      personInfo: {
        age: '39',
        maritalStatus: '02',
        educationLevel: '05',
        dependantQty: '0',
        flagEmployeeFs: 'N',
        fsEmploymentType: '0',
        flagNoCustomerPresence: '',
        entprBusiness: {
          entprDesc: '',
        },
      },
    },
  ],
  listOcupation: [
    {
      businessInfo: {
        businessType: '05',
        flagMainJobActivity: 'Y',
        formality: 'FORMAL',
        labourSector: 'PR',
        rentType: '0',
        applicantMarket: 'MASIVO',
        incomeAmt: '1000000',
        netIncomeAmt: '0',
        jobYears: '7',
        jobMonths: '0',
        segment: '07',
        subSegment: 'PENSIONADO',
        labourContractType: '0',
        discountCapacity: 'Y',
      },
    },
  ],
  relationtInfo: [
    {
      govIssueIdent: {
        identSerialNum: '1077970977',
        govIssueIdentType: 'CC',
      },
      personName: {
        lastName: 'ZABALA',
        secondLastName: '',
        firstName: 'YUDY',
        middleName: '',
      },
      relationType: '01',
      flagContributorIng: 'S',
      relationShipPpal: '',
      indInsurable: 'N',
    },
  ],
};

export const SUCCESSBLACKLISTMANAGEMENTRESPONSE: AxiosResponse = {
  data: {
    responseType: {
      value: 'OK',
    },
    responseDetail: {
      errorCode: '00',
      errorDesc: 'Tenencia y comportamiento múltiple exitosa',
      errorType: null,
    },
    govIssueIdent: {
      govIssueIdentType: 'CC',
      identSerialNum: '1077970977',
    },
    depAcctStmtRec: {
      depAcctId: {
        refNumber: '550100000000001',
      },
    },
    offer: {
      requestType: 'Sales Order',
      requestVersion: '1',
      indMoment: '1',
      executionLine: 'C',
    },
    listTenureInfo: [
      {
        govIssueIdent: {
          govIssueIdentType: 'CC',
          identSerialNum: '1077970977',
        },
        responseTC: 'OK',
        errorCode: null,
        errorDesc: null,
      },
    ],
  },
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
};

export const ERRORBLACKLISTMANAGEMENTRESPONSE206: AxiosResponse = {
  data: {
    ResponseType: { value: 'ER' },
    ResponseDetail: {
      ErrorCode: '01',
      ErrorDesc: 'Al menos uno de los procesos T y C no se finalizó',
      ErrorType: 'ER',
    },
  },
  status: 206,
  statusText: 'OK',
  headers: {},
  config: {},
};

export const BASICDATACACHESUCCESS = {
  govIssueIdent: { govIssueIdentType: 'CC', identSerialNum: '9923715474' },
  personInfo: {
    birthDt: '07/09/1990',
    age: '32',
    typeOfHousing: 'O',
    educationLevel: '04',
    gender: 'M',
    maritalStatus: '01',
    govIssueIdent: { expDt: '07/09/2009' },
    deceaseCert: '',
    deceaseDt: '',
  },
  contactInfo: {
    emailAddr: 'j2g2g9i3@bancocajasocial.com',
    phoneNum: { cellPhone: '3148540698' },
  },
  businessActivity: {
    businessGrade: '',
    startInabilityDt: '',
    endInabilityDt: '',
  },
  postAddr: { startDt: '' },
  fsEmploymentType: 'N',
  rentalAmt: '',
  dependantQty: '',
  personName: {
    fullName: 'LUIS JAIRO ATEHORTUA BUSTAMANTE',
    firstName: 'LUIS',
    middleName: 'JAIRO',
    lastName: 'ATEHORTUA',
    secondLastName: 'BUSTAMANTE',
  },
  entpr: { entprDesc: '' },
  applicantInfo: { sarlaftDate: '' },
  ocupationInfoList: [
    {
      businessInfo: {
        labourContractType: '1',
        flagMainJobActivity: 'Y',
        subSegment: 'PENSIONADO',
        formality: 'FORMAL',
        applicantMarket: 'MASIVO',
        rentType: '1',
        netIncomeAmt: '0',
        discountCapacity: 'Y',
        incomeAmt: '40000000',
        jobYears: '7',
        jobMonths: '0',
        segment: '07',
        businessType: '05',
      },
    },
  ],
  listIncomeReferenceJob: [
    {
      businessInfo: { incomeAmt: '40000000' },
      applicantInfo: { flagDiscount: 'Y', amtDesc: '1-3Q0DFI' },
    },
  ],
  listAddress: [
    {
      postAddr: {
        addr1: 'CL 203 13 13',
        cityId: '11001',
        neighborhood: '',
      },
      phoneNum: { phoneExt: '', phoneAreaCode: '11001', phone: '8965183' },
      relationType: '03',
      applicantInfo: { leafletType: 'Customer' },
    },
  ],
};

export const BASICDATACACHESUCCESSVALUESNULL = {
  govIssueIdent: { govIssueIdentType: 'CC', identSerialNum: '9923715474' },
  personInfo: {
    birthDt: '07/09/1990',
    age: '32',
    typeOfHousing: 'O',
    educationLevel: '04',
    gender: 'M',
    maritalStatus: '01',
    govIssueIdent: { expDt: '07/09/2009' },
    deceaseCert: '',
    deceaseDt: '',
  },
  contactInfo: {
    emailAddr: 'j2g2g9i3@bancocajasocial.com',
    phoneNum: { cellPhone: '3148540698' },
  },
  businessActivity: {
    businessGrade: '',
    startInabilityDt: '',
    endInabilityDt: '',
  },
  postAddr: { startDt: '' },
  fsEmploymentType: 'N',
  rentalAmt: '',
  dependantQty: '',
  personName: {
    fullName: 'LUIS JAIRO ATEHORTUA BUSTAMANTE',
    firstName: 'LUIS',
    middleName: 'JAIRO',
    lastName: 'ATEHORTUA',
    secondLastName: 'BUSTAMANTE',
  },
  entpr: { entprDesc: '' },
  applicantInfo: { sarlaftDate: '' },
  ocupationInfoList: [
    {
      businessInfo: {
        labourContractType: null,
        flagMainJobActivity: 'Y',
        subSegment: 'PENSIONADO',
        formality: 'FORMAL',
        applicantMarket: 'MASIVO',
        rentType: null,
        netIncomeAmt: '0',
        discountCapacity: 'Y',
        incomeAmt: '40000000',
        jobYears: '7',
        jobMonths: '0',
        segment: '07',
        businessType: '05',
      },
    },
  ],
  listIncomeReferenceJob: [
    {
      businessInfo: { incomeAmt: '40000000' },
      applicantInfo: { flagDiscount: 'Y', amtDesc: '1-3Q0DFI' },
    },
  ],
  listAddress: [
    {
      postAddr: {
        addr1: 'CL 203 13 13',
        cityId: '11001',
        neighborhood: '',
      },
      phoneNum: { phoneExt: '', phoneAreaCode: '11001', phone: '8965183' },
      relationType: '03',
      applicantInfo: { leafletType: 'Customer' },
    },
  ],
};

export const BASICDATACACHESUCCESSVALUESUNDEFINED = {
  govIssueIdent: { govIssueIdentType: 'CC', identSerialNum: '9923715474' },
  personInfo: {
    birthDt: '07/09/1990',
    age: '32',
    typeOfHousing: 'O',
    educationLevel: '04',
    gender: 'M',
    maritalStatus: '01',
    govIssueIdent: { expDt: '07/09/2009' },
    deceaseCert: '',
    deceaseDt: '',
  },
  contactInfo: {
    emailAddr: 'j2g2g9i3@bancocajasocial.com',
    phoneNum: { cellPhone: '3148540698' },
  },
  businessActivity: {
    businessGrade: '',
    startInabilityDt: '',
    endInabilityDt: '',
  },
  postAddr: { startDt: '' },
  fsEmploymentType: 'N',
  rentalAmt: '',
  dependantQty: '',
  personName: {
    fullName: 'LUIS JAIRO ATEHORTUA BUSTAMANTE',
    firstName: 'LUIS',
    middleName: 'JAIRO',
    lastName: 'ATEHORTUA',
    secondLastName: 'BUSTAMANTE',
  },
  entpr: { entprDesc: '' },
  applicantInfo: { sarlaftDate: '' },
  ocupationInfoList: [
    {
      businessInfo: {
        labourContractType: undefined,
        flagMainJobActivity: 'Y',
        subSegment: 'PENSIONADO',
        formality: 'FORMAL',
        applicantMarket: 'MASIVO',
        rentType: undefined,
        netIncomeAmt: '0',
        discountCapacity: 'Y',
        incomeAmt: '40000000',
        jobYears: '7',
        jobMonths: '0',
        segment: '07',
        businessType: '05',
      },
    },
  ],
  listIncomeReferenceJob: [
    {
      businessInfo: { incomeAmt: '40000000' },
      applicantInfo: { flagDiscount: 'Y', amtDesc: '1-3Q0DFI' },
    },
  ],
  listAddress: [
    {
      postAddr: {
        addr1: 'CL 203 13 13',
        cityId: '11001',
        neighborhood: '',
      },
      phoneNum: { phoneExt: '', phoneAreaCode: '11001', phone: '8965183' },
      relationType: '03',
      applicantInfo: { leafletType: 'Customer' },
    },
  ],
};

export const BASICDATACACHESUCCESSWITHOUTBUSSINESINFO = {
  govIssueIdent: { govIssueIdentType: 'CC', identSerialNum: '93355310' },
  personInfo: {
    birthDt: '12/24/1970',
    age: '52',
    typeOfHousing: '',
    educationLevel: '',
    gender: 'M',
    maritalStatus: '01',
    govIssueIdent: { expDt: '09/14/1990' },
    deceaseCert: '',
    deceaseDt: '',
  },
  contactInfo: {
    emailAddr: 'l4r7f6o5@bancocajasocial.com',
    phoneNum: { cellPhone: '3142155865' },
  },
  businessActivity: {
    businessGrade: '',
    startInabilityDt: '',
    endInabilityDt: '',
  },
  postAddr: { startDt: '2 años 11 meses' },
  fsEmploymentType: 'N',
  rentalAmt: '',
  dependantQty: '',
  personName: {
    fullName: 'HENRY ARLEY GUZMAN TORRES',
    firstName: 'HENRY',
    middleName: 'ARLEY',
    lastName: 'GUZMAN',
    secondLastName: 'TORRES',
  },
  entpr: { entprDesc: '' },
  applicantInfo: { sarlaftDate: '' },
  ocupationInfoList: [{ businessInfo: '' }],
  listIncomeReferenceJob: [{ businessInfoR: '', applicantInfo: '' }],
  listAddress: [
    {
      postAddr: { addr1: 'CL 1 5 85', cityId: '11001', neighborhood: 'NA' },
      phoneNum: { phoneExt: '', phoneAreaCode: '11001', phone: '0' },
      relationType: '03',
      applicantInfo: { leafletType: 'Customer' },
    },
  ],
};

export const TOKENERRORBLACKLISTMANAGEMENT = {
  isAxiosError: true,
  response: {
    data: {
      error: 'Token has expired.',
    },
    status: 401,
    statusText: 'OK',
    headers: {},
    config: {},
  },
  config: {
    url: 'valdiate token url',
  },
};

export const JOBAGREEMENTCACHESUCCESS: JobAgreementValidationDto | undefined = {
  govIssueIdent: {
    identSerialNum: '80202750',
    govIssueIdentType: 'CC',
  },
  listVinculate: [
    {
      listVinculateItem: [
        {
          depAcctStmtRec: {
            depAcctId: {
              acctId: '00000123',
            },
            disbursement: {
              amt: '100000000',
              quota: '350000',
              rate: '12,25',
              status: 'Vigente',
              statusDate: '28/02/2023',
              agreementNumber: '10000334',
            },
            indebtedness: {
              term: '30',
            },
            cardAcctId: {
              numAsignInstallments: '48',
            },
            expenses: {
              suggestedPmtAmt: '400000',
            },
            loanInfoCommon: {
              completedPmtCount: '5',
              lastPmtDt: '28/01/2023',
            },
            product: {
              productType: '01',
            },
            entprAgreement: {
              entprDesc: 'GRUPO_85_02',
            },
          },
        },
      ],
    },
  ],
  product: {
    productId: '1',
  },
};

export const JOBAGREEMENTCACHEFAILEDWITHOUTAGREEMENT:
  | JobAgreementValidationDto
  | undefined = {
  govIssueIdent: {
    identSerialNum: '',
    govIssueIdentType: '',
  },
  listVinculate: [
    {
      listVinculateItem: [
        {
          depAcctStmtRec: {
            depAcctId: {
              acctId: '',
            },
            disbursement: {
              amt: '',
              quota: '',
              rate: '',
              status: '',
              statusDate: '',
              agreementNumber: '',
            },
            indebtedness: {
              term: '',
            },
            cardAcctId: {
              numAsignInstallments: '',
            },
            expenses: {
              suggestedPmtAmt: '',
            },
            loanInfoCommon: {
              completedPmtCount: '',
              lastPmtDt: '',
            },
            product: {
              productType: '',
            },
            entprAgreement: {
              entprDesc: '',
            },
          },
        },
      ],
    },
  ],
  product: {
    productId: '',
  },
};
