export enum EtypeDocument {
  CC = 'CC',
  CE = 'CE',
  US = 'US',
  TI = 'TI',
}

export enum ETypeClient {
  PRE = 'Pre-aprobado',
  VF = 'Venta en frio',
}

export enum CodigoAllowListMessage {
  'PF-01' = 'Datos basicos',
  'PF-02' = 'Datos basicos',
  'RL-02' = 'Listas restrictivas',
  'IV-03' = 'Datos basicos',
  'IV-02' = 'Datos basicos',
  'IV-08' = 'Listas restrictivas',
  'IV-05' = 'Datos basicos',
  'IV-09' = 'Bloqueo por varios intentos',
  'ER-00' = 'No aprobado sin mapear',
}

export enum CodigoAllowListDetails {
  'PF-01' = 'Prellenado no trae celular o email',
  'PF-02' = 'Prellenado no trae email ni dirección',
  'RL-02' = 'Falla por listas restrictivas',
  'IV-03' = 'Si el documento del usuario esta inactivo',
  'IV-02' = 'Numero de documento no valido',
  'IV-08' = 'Bloqueado por VelocityCheck',
  'IV-05' = 'No se tiene información del usuario',
  'IV-09' = 'Bloqueo por varios intentos',
  'ER-00' = 'No aprobado sin mapear',
}

export enum LogMethod {
  'log' = 'log',
  'debug' = 'debug',
  'error' = 'error',
  'warn' = 'warn',
}
