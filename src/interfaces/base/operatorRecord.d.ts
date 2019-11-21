import { CompanyType, RecordType } from '../global';

export interface OperatorRecordParamsType {
  companyType: CompanyType;
  recordType: RecordType;
  token: number;
  page?: number;
  size?: number;
}

export interface OperatorRecordResType {
  no?: number;
  operator?: string;
  operDate?: string;
  operType?: string;
  detail?: string;
}
