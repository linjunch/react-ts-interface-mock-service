import { SortType, CheckStepType, ServiceType } from '../global';

// 订单结算列表接口
export interface OrderFeeListParamsType {
  feeCode?: string;
  supplierName?: string;
  ownerName?: string;
  dateL?: string;
  dateU?: string;
  step?: CheckStepType;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}
export interface OrderFeeListResType {
  id?: number;
  feeCode?: string;
  supplierName?: string;
  ownerName?: string;
  orderCode?: string;
  otherOrderCode?: string;
  feeType?: number;
  subtotal?: number;
  insDate?: string;
  checkStep?: CheckStepType;
  billCode?: string;
}
// 订单结算详情接口
export interface OrderFeeDetailParamsType {
  orderFeeToken: number;
}
export interface OrderFeeDetailResType {
  feeCode?: string;
  supplierName?: string;
  orderCode?: string;
  otherOrderCode?: string;
  feeType?: number;
  serviceType?: Exclude<ServiceType, 'declareService'>;
  costPayType?: number;
  content?: string;
  count?: number;
  amt?: number;
  discount?: number;
  subtotal?: number;
  detail?: string;
  auditUser?: string;
  insUser?: string;
  insDate?: string;
  checkStep?: CheckStepType;
  billCode?: string;
}
// 订单结算创建接口
export interface OrderFeeCreateParamsType {
  submit: boolean;
  orderFee: OrderFeeCreateFormType;
}
export interface OrderFeeCreateFormType {
  orderCode: string;
  otherOrderCode: string;
  feeType: number;
  serviceType: Exclude<ServiceType, 'declareService'>;
  costPayType: number;
  content: string;
  count: number;
  amt: number;
  discount: number;
  subtotal: number;
  detail?: string;
}
export interface OrderFeeCreateResType {
  token?: number;
}
// 订单结算修改接口
export interface OrderFeeChangeParamsType {
  orderFeeToken: number;
  submit: boolean;
  orderFee: OrderFeeChangeFormType;
}
export interface OrderFeeChangeFormType {
  orderCode: string;
  otherOrderCode: string;
  feeType: number;
  serviceType: Exclude<ServiceType, 'declareService'>;
  costPayType: number;
  content: string;
  count: number;
  amt: number;
  discount: number;
  subtotal: number;
  detail?: string;
}
export interface OrderFeeChangeResType {
  token?: number;
}
// 订单结算审核接口
export interface OrderFeeSrepParamsType {
  orderFeeToken: number;
  checkStep: Extract<CheckStepType, 'pass' | 'return' | 'reject'>;
}
export interface OrderFeeStepResType {
  token: number;
}
