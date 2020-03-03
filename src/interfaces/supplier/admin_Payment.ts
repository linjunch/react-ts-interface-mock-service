import { PaymentType, PaymentStepType, GoodsSortType } from '../global';

// 货款结账列表接口
export interface AdminPaymentListParamsType {
  shCode?: string;
  ledgerCode?: string;
  insDateL?: string;
  insDateU?: string;
  paymentType?: PaymentType;
  step?: PaymentStepType;
  direction?: boolean;
  sort?: Exclude<GoodsSortType, 'goodsCode'>;
  page?: number;
  size?: number;
}
export interface AdminPaymentListResType {
  id?: number;
  paymentCode?: string;
  tradeName?: string;
  shCode?: string;
  ledgerCode?: string;
  insDate?: string;
  paymentType?: PaymentType;
  step?: PaymentStepType;
}

// 货款结账详情接口
export interface AdminPaymentDetailParamsType {
  paymentToken: number;
}
export interface AdminPaymentDetailResType {
  paymentCode?: string;
  tradeName?: string;
  shCode?: string;
  ledgerCode?: string;
  amt?: number;
  deduct?: number;
  payable?: number;
  detail?: string;
  paymentType?: PaymentType;
  insDate?: string;
  declareStep?: PaymentStepType;
}

// 结账明细列表接口
export interface AdminPaymentItemListParamsType {
  paymentToken: number;
}
export interface AdminPaymentItemListResType {
  id?: number;
  paymentCode?: string;
  bePaymentCode?: string;
  amt?: number;
}
