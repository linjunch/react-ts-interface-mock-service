import { ShStepType, SortType } from '../global';

// 收汇列表接口
export interface AdminShListParamsType {
  shCode?: string;
  tradeName?: string;
  bankName?: string;
  buyer?: string;
  amountL?: number;
  amountU?: number;
  shDateL?: string;
  shDateU?: string;
  step?: ShStepType;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}
export interface AdminShListResType {
  id?: number;
  shCode?: string;
  amount?: number;
  currency?: string;
  remitter?: string;
  shDate?: string;
  jhDate?: string;
  tradeName?: string;
  insDate?: string;
  shStep?: ShStepType;
}

// 收汇详情接口
export interface AdminShDetailParamsType {
  shToken: number;
}
export interface AdminShDetailResType {
  id?: number;
  tradeName?: string;
  shCode?: string;
  amount?: number;
  currency?: string;
  exchRate?: number;
  usdRate?: number;
  remitter?: string;
  shDate?: string;
  bankName?: string;
  bankAccount?: string;
  remark?: string;
  jhCode?: string;
  jhDate?: string;
  jhBankAccount?: string;
  shVoucherId?: number;
  insDate?: string;
  shStep?: number;
}
