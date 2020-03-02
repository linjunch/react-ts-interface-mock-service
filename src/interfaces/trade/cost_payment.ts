import { LedgerSortType, PaymentType, PaymentStepType } from '../global';

// 货款结账列表接口
export interface PaymentListParamsType {
  supplierName?: string;
  shCode?: string;
  ledgerCode?: string;
  insDateL?: string;
  insDateU?: string;
  paymentType?: PaymentType;
  step?: PaymentStepType;
  direction?: boolean;
  sort?: Exclude<LedgerSortType, 'exDate'>;
  page?: number;
  size?: number;
}
export interface PaymentListResType {
  id?: number;
  paymentCode?: string;
  supplierName?: string;
  shCode?: string;
  ledgerCode?: string;
  auditUser?: string;
  insUser?: string;
  insDate?: string;
  paymentType?: PaymentType;
  step?: PaymentStepType;
}

// 货款结账详情接口
export interface PaymentDetailParamsType {
  paymentToken: number;
}
export interface PaymentDetailResType {
  paymentCode?: string;
  supplierCode?: string;
  supplierName?: string;
  shCode?: string;
  ledgerCode?: string;
  amt?: number;
  deduct?: number;
  payable?: number;
  detail?: string;
  paymentType?: PaymentType;
  auditUser?: string;
  insUser?: string;
  insDate?: string;
  declareStep?: PaymentStepType;
}

// 货款结账创建接口
export interface PaymentCreateParamsType {
  submit: boolean;
  payment: PaymentCreateFormType;
}
export interface PaymentCreateFormType {
  shCode: string;
  ledgerCode: string;
  amt: number;
  deduct: number;
  payable: number;
  detail?: string;
  paymentType: string;
}
export interface PaymentCreateResType {
  token?: number;
}

// 货款结账修改接口
export interface PaymentChangeParamsType {
  paymentToken: number;
  submit: boolean;
  payment: PaymentChangeFormType;
}
export interface PaymentChangeFormType {
  paymentCode?: string;
  shCode?: string;
  ledgerCode?: string;
  amt?: number;
  deduct?: number;
  payable?: number;
  detail?: string;
  paymentType?: string;
}
export interface PaymentChangeResType {
  token?: number;
}

// 货款结账进度接口
export interface PaymentStepParamsType {
  paymentToken: number;
  paymentStep: Exclude<PaymentStepType, 'draft' | 'check' | 'finish'>;
}
export interface PaymentStepResType {
  token: number;
}

// 货款结账删除接口
export interface PaymentDeleteParamsType {
  paymentToken: number;
}

// 结账明细列表接口
export interface PaymentItemListParamsType {
  paymentToken: number;
}
export interface PaymentItemListResType {
  id?: number;
  paymentCode?: string;
  bePaymentCode?: string;
  amt?: number;
}

// 结账明细创建接口
export interface PaymentItemCreateParamsType {
  paymentToken: number;
  paymentItem: PaymentItemCreateFormType;
}
export interface PaymentItemCreateFormType {
  bePaymentCode: string;
  amt: number;
}
export interface PaymentItemCreateResType {
  token?: number;
}

// 结账明细修改接口
export interface PaymentItemChangeParamsType {
  paymentToken: number;
  paymentItemToken: number;
  paymentItem: PaymentItemChangeFormType;
}
export interface PaymentItemChangeFormType {
  bePaymentCode: string;
  amt: number;
}
export interface PaymentItemChangeResType {
  token?: number;
}

// 结账明细删除接口
export interface PaymentItemDeleteParamsType {
  paymentToken: number;
  paymentItemToken: number;
}
