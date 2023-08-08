export enum EDocumentsBasicDataException {
  CODE = 500,
  CODEEXCEPTION = 'E-01',
  DESCRIPTION = 'Error procesing basic data',
  DESCRIPTIONSWAGGER = 'Error al consultar los datos basicos del cliente',
  SUCCESS = 0,
}

export enum EDocumentsException {
  CODE = 500,
  CODEEXCEPTION = 'E-02',
  DESCRIPTION = 'Error procesing exception documents',
  DESCRIPTIONSWAGGER = 'Error del servicio core en la consulta de excepción de documentos del cliente',
  SUCCESS = 0,
}

export enum EDocumentsRuleException {
  CODE = 500,
  CODEEXCEPTION = 'E-03',
  DESCRIPTION = 'Error procesing rule document',
  DESCRIPTIONSWAGGER = 'Error del servicio core en la consulta de regla documental del cliente',
  SUCCESS = 0,
}

export enum EContactDataError {
  CODE = 500,
  CODEEXCEPTION = 'E-04',
  DESCRIPTION = 'Contact data error consult',
  DESCRIPTIONSWAGGER = 'Error generado por consulta de collection contact data',
  SUCCESS = 0,
}

export enum EClientNotJobAgreement {
  CODE = 500,
  CODEEXCEPTION = 'E-05',
  DESCRIPTION = 'Error procesing customer job agreement',
  DESCRIPTIONSWAGGER = 'No se encontró información del convenio del cliente, asegurar que el cliente haya consultado convenio',
  SUCCESS = 0,
}

export enum EDocumentsUploadException {
  CODE = 500,
  CODEEXCEPTION = 'E-06',
  DESCRIPTION = 'Error procesing upload document',
  DESCRIPTIONSWAGGER = 'Error del servicio core en al cargar los documental del cliente',
  SUCCESS = 0,
}
