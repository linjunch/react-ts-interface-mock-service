import { CheckStepType, StatusType, SortType } from '../global';

// public: 凭证信息接口
export interface AdminVouchersInfoParamsType {
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

// 凭证列表接口
export interface AdminVouchersListParamsType {
  piCode?: string;
  tradeName?: string;
  ownerName?: string;
  buyer?: string;
  remitDateL?: string;
  remitDateU?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: CheckStepType;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}
export interface AdminVouchersListResType extends AdminVouchersInfoParamsType {}

// 凭证详情接口
export interface AdminVouchersDetailParamsType {
  voucherToken: number;
}
export interface AdminVouchersDetailResType extends AdminVouchersInfoParamsType {
  fileUrl?: string;
  piList?: Array<string>;
  remark?: string;
  insUserL?: string;
}
