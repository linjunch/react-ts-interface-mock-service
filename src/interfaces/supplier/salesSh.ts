import { ShStepType, StatusType, SortType } from '../global';

// 收汇列表接口
export interface ShListParamsType {
  shCode?: string;
  tradeName?: string;
  bankName?: string;
  buyer?: string;
  shDateL?: string;
  shDateU?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: ShStepType;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}

export interface ShListResType {
  id?: number;
  shCode?: string;
  amount?: number;
  currency?: string;
  remitter?: string;
  shDate?: string;
  jhDate?: string;
  tradeName?: string;
  insDate?: string;
  shStep?: Exclude<ShStepType, 'all'>;
}

// 收汇详情接口
export interface ShDetailParamsType {
  shToken: number;
}

export interface ShDetailResType {
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
  abstract?: string;
  jhCode?: string;
  jhDate?: string;
  jhBankAccount?: string;
  shVoucherId?: number;
  insDate?: string;
  shStep?: number;
}
