import { CheckStepType, StatusType, SortType } from '../global';
import { PickRequired } from '../utils';

// public: voucher通用接口
export interface VoucherInfoType {
  remitDate?: string;
  remitAmt?: number;
  currency?: string;
  tradeName?: string;
  buyerName?: string;
}
export interface VoucherStatusType {
  insDate?: string;
  isLock?: boolean;
  status?: StatusType;
  checkStep?: CheckStepType;
}
export interface VoucherOtherType {
  fileUrl?: string;
  piList?: Array<any>;
  remark?: string;
}

// 凭证列表接口
export interface VoucherListParamsType {
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
export interface VoucherListResType extends VoucherInfoType, VoucherStatusType {
  id?: number;
}

// 凭证详情接口
export interface VoucherDetailParamsType {
  voucherToken: number;
}
export interface VoucherDetailResType extends VoucherInfoType, VoucherStatusType, VoucherOtherType {
  id?: number;
  insUserL?: string;
}

// 凭证创建接口
export interface VoucherCreateParamsType {
  submit: boolean;
  order: VoucherCreateFormType;
}
export interface VoucherCreateFormType
  extends Required<VoucherInfoType>,
    PickRequired<VoucherOtherType, 'fileUrl' | 'piList'> {
  tradeCode: string;
}
export interface VoucherCreateResType extends VoucherInfoType, VoucherStatusType, VoucherOtherType {
  token?: number;
}

// 凭证删除接口
export interface VoucherDeleteParamsType {
  voucherToken: number;
}
