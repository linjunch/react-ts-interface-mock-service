import { StatusType, ShStepType, SortType } from '../global';

// 收汇列表接口
export interface ShListParamsType {
  shCode?: string;
  supplierName?: string;
  bankName?: string;
  buyer?: string;
  shDateL?: string;
  shDateU?: string;
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
  shStep?: ShStepType;
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
  remark?: string;
  jhCode?: string;
  jhDate?: string;
  jhBankAccount?: string;
  shVoucherId?: number;
  insDate?: string;
  shStep?: number;
}

// 收汇创建接口
export interface ShCreateParamsType {
  submit: boolean;
  sh: ShCreateFormType;
}
export interface ShCreateFormType {
  shCode?: string;
  amount?: number;
  currency?: string;
  remitter?: string;
  shDate?: string;
  bankId?: number;
  remark?: string;
}

// 收汇返回修改接口
export interface ShReturnChangeParamsType {
  shToken: number;
}
export interface ShReturnChangeResType {
  token: number;
}

// 收汇结汇接口
export interface ShJhParamsType {
  shToken: number;
  submit: boolean;
  jh: ShJhFormType;
}
export interface ShJhFormType {
  shCode?: string;
  exchRate?: number;
  usdRate?: number;
  jhCode?: string;
  jhDate?: string;
}
export interface ShJhResType {
  token?: number;
}

// 收汇审核通过接口
export interface ShStepPassParamsType {
  shToken: number;
}
export interface ShStepPassResType {
  token: number;
}

// 收汇匹配接口
export interface ShAffirmParamsType {
  shToken: number;
  affirm: ShAffirmFormType;
}
export interface ShAffirmFormType {
  shVoucherId: number;
}
export interface ShAffirmResType {
  token: number;
}

// 收汇核对接口
export interface ShVerifyParamsType {
  shToken: number;
}
export interface ShVerifyResType {
  token: number;
}

// 收汇重新匹配接口
export interface ShReaffirmParamsType {
  shToken: number;
}
export interface ShReaffirmResType {
  token: number;
}

// 银行表单
interface BankFormType {
  bankName: string;
  bankNameEn: string;
  addr: string;
  addrEn: string;
  swiftCode: string;
  bankAccount: string;
  currency: string;
  jhBankAccount: string;
  noticeMould?: string;
}

// 银行列表接口
export interface BankListParamsType {
  bankName?: string;
  status?: Exclude<StatusType, 'deleted'>;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}
export interface BankListResType {
  id?: number;
  bankName?: string;
  currency?: string;
  status?: StatusType;
}

// 银行创建接口
export interface BankCreateParamsType {
  bank: BankFormType;
}
export interface BankListResType {
  token?: number;
}

// 银行修改接口
export interface BankChangeParamsType {
  bank: BankFormType;
  bankToken: number;
}
export interface BankChangeResType {
  token?: number;
}

// 银行状态接口
export interface BankStateParamsType {
  bankToken: number;
  val: Exclude<StatusType, 'all' | 'deleted'>;
}
export interface BankStateResType {
  token: number;
}

// 银行删除接口
export interface BankDeleteParamsType {
  bankToken: number;
}
