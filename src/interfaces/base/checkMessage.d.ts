import { CompanyType, TrendsType } from '../global';

export interface CheckMessageParamsType {
  companyType: CompanyType;
  trendsType: TrendsType;
  token: number;
}

export interface CheckMessageResType {
  SS?: boolean;
  SA?: boolean;
  TS?: boolean;
  TC?: boolean;
  TA?: boolean;
  OS?: boolean;
  OC?: boolean;
  OA?: boolean;
}
