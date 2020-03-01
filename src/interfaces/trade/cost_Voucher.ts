import { StatusType, SortType, CheckStepType, ValType } from '../global';

// 凭证列表接口
export interface VoucherListParamsType {
  piCode?: string;
  supplierName?: string;
  ownerName?: string;
  buyer?: string;
  remitDateL?: string;
  remitDateU?: string;
  status?: Exclude<StatusType, 'deleted'>;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}
export interface VoucherListResType {
  id?: number;
  remitDate?: string;
  remitAmt?: number;
  currency?: string;
  tradeName?: string;
  buyerName?: string;
  insDate?: string;
  isLock?: boolean;
  status?: StatusType;
  checkStep?: CheckStepType;
}

// 凭证详情接口
export interface VoucherDetailParamsType {
  voucherToken: number;
}
export interface VoucherDetailResType {
  id?: number;
  remitDate?: string;
  remitAmt?: string;
  currency?: string;
  tradeName?: string;
  buyerName?: string;
  fileUrl?: string;
  piList?: Array<string>;
  remark?: string;
  insUserL?: string;
  insDate?: string;
  isLock?: boolean;
  status?: StatusType;
  checkStep?: CheckStepType;
}

// 凭证审核接口
export interface VoucherStepParamsType {
  voucherToken: number;
  val: ValType;
}
export interface VoucherStepResType {
  token: number;
}
