import { ApiProperty } from '@nestjs/swagger';
import { EmessageMapping } from '../utils/enums/message.enum';
import { Etask } from '../utils/enums/taks.enum';

export class BusinessException {
  @ApiProperty()
  public code: number;
  @ApiProperty()
  public description: string;
  @ApiProperty()
  public success: boolean;
  @ApiProperty()
  public details?: IoptionalDetails;

  constructor(
    code: number,
    description: string,
    success = false,
    details?: IoptionalDetails,
  ) {
    this.code = code;
    this.description = description;
    this.success = success;
    this.details = details;
  }
}

export interface IoptionalDetails {
  readonly codMessage?: EmessageMapping;
  readonly context?: string;
  readonly task?: Etask;
  readonly document?: any;
}

export function returnExceptionSwagger(enums: any[]) {
  const status: number = enums[0].CODE;
  let description = '';
  enums.forEach((e) => {
    description += e.CODEEXCEPTION + ' ' + e.DESCRIPTIONSWAGGER + '<br>\n';
  });
  return {
    status,
    description,
    type: BusinessException,
  };
}
