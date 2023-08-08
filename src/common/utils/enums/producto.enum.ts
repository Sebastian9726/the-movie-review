export enum EProductType {
  SAVINGACCOUNT = 'SDA',
  CURRENTACCOUNT = 'DDA',
  CDT = 'CDA',
  FIDUCIARY = 'OFA',
  CREDIT = 'ILA',
  CREDITCARD = 'CCA',
  ROUTINGCREDIT = 'RLA',
}

export enum EBackACCTSTATUSCode {
  OPEN = 'O',
  CLOSED = 'C',
  INACTIVE = 'I',
  NOTAVIABLE = 'N',
}

export enum EDTOGroups {
  CURRENTPAYROLLLOANGROUP = 'current-payroll-loan',
  INTERNALCURRENTPAYROLLLOANGROUP = 'internal-current-payroll-loan',
  SIMULATORGROUP = 'simulator',
  SIMULATORV2GROUP = 'simulator-v2',
  INSURANCEV2GROUP = 'insurance-v2',
  SIMULATORGOALSEEKGROUP = 'simulator-goal-seek',
  BLACKLISTMANAGEMENTREQUESTGROUP = 'black-list-management-request',
  BLACKLISTMANAGEMENTRESPONSEGROUP = 'black-list-management-response',
}

export enum TASAS {
  TASAPACTADA = 'tasaPactadaEA',
  TASACOBRADA = 'tasaCobradaEA',
}

export enum HTTPSAGENT {
  HTTPSAGENTCLIENT = 'HttpsAgentClient',
}
