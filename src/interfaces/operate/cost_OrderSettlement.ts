import { SortType, BillType, BillStepType } from '../global';

// 订单结算列表接口
export interface BillListParamsType {
  billCode?: string;
  supplierName?: string;
  billType?: BillType;
  dateL?: string;
  dateU?: string;
  billStep?: BillStepType;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}
export interface BillListResType {
  id: number;
  billCode: string;
  supplierName: string;
  orderCode: string;
  serviceCode: string;
  billType: number;
  total: number;
  insDated: string;
  billStep: BillStepType;
}

// 订单结算详情接口
export interface BillDetailParamsType {
  billToken: number;
}
export interface BillDetailResType {
  billCode: string;
  supplierId: number;
  supplierName: string;
  orderId: number;
  orderCode: string;
  billType: BillType;
  serviceCode: string;
  serviceFee: number;
  discount?: number;
  additional?: number;
  total: number;
  detail?: string;
  salesmanId?: number;
  salesman?: string;
  reward?: number;
  isReward?: boolean;
  auditUser: string;
  insUser: string;
  insDate: string;
  billStep: BillStepType;
}

// 订单结算创建接口
export interface BillCreateParamsType {
  submit: boolean;
  bill: BillCreateFormType;
}
export interface BillCreateFormType {
  billCode: string;
  supplierId: number;
  supplierName: string;
  orderId: number;
  orderCode: string;
  billType: BillType;
  serviceCode: string;
  serviceFee: number;
  discount?: number;
  additional?: number;
  total: number;
  detail?: string;
  salesmanId?: number;
  salesman?: string;
  reward?: number;
}
export interface BillCreateResType {
  token?: number;
}

// 订单结算修改接口
export interface BillChangeParamsType {
  billToken: number;
  submit: boolean;
  bill: BillChangeFormType;
}
export interface BillChangeFormType {
  billCode: string;
  supplierId: number;
  supplierName: string;
  orderId: number;
  orderCode: string;
  billType: BillType;
  serviceCode: string;
  serviceFee: number;
  discount?: number;
  additional?: number;
  total: number;
  detail?: string;
  salesmanId?: number;
  salesman?: string;
  reward?: number;
}
export interface BillChangeResType {
  token?: number;
}

// 订单结算进度接口
export interface BillStepParamsType {
  billToken: number;
  billStep: Exclude<BillStepType, 'draft' | 'check'>;
}
export interface BillStepResType {
  token: number;
}

// 订单结算删除接口
export interface BillDeleteParamsType {
  billToken: number;
}

// 结算明细列表接口
export interface BillItemListParamsType {
  billToken: number;
}
export interface BillItemListResType {
  id: number;
  content: string;
  count: number;
  amt: number;
  discount: number;
  subtotal: number;
  detail: string;
}

// 结算明细创建接口
export interface BillItemCreateParamsType {
  billToken: number;
  billItem: BillItemCreateFormType;
}
export interface BillItemCreateFormType {
  content: string;
  count: number;
  amt: number;
  discount: number;
  subtotal: number;
  detail?: string;
}
export interface BillItemCreateResType {
  token?: number;
}

// 结算明细修改接口
export interface BillItemChangeParamsType {
  billToken: number;
  itemToken: number;
  billItem: BillItemChangeFormType;
}
export interface BillItemChangeFormType {
  content: string;
  count: number;
  amt: number;
  discount: number;
  subtotal: number;
  detail?: string;
}
export interface BillItemChangeResType {
  token?: number;
}

// 结算明细删除接口
export interface BillItemDeleteParamsType {
  billToken: number;
  itemToken: number;
}
