import { BillType, BillStepType, SortType } from '../global';

// 订单结算列表接口
export interface AdminBillListParamsType {
  billCode?: string;
  billType?: BillType;
  dateL?: string;
  dateU?: string;
  billStep?: BillStepType;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}
export interface AdminBillListResType {
  id: number;
  billCode: string;
  orderCode: string;
  serviceCode: string;
  billType: number;
  total: number;
  insDate: string;
  billStep: BillStepType;
}

// 订单结算详情接口
export interface AdminBillDetailParamsType {
  billToken: number;
}
export interface AdminBillDetailResType {
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
  insDate: string;
  billStep: BillStepType;
}

// 结算明细列表接口
export interface AdminBillItemListParamsType {
  billToken: number;
}
export interface AdminBillItemListResType {
  id: number;
  content: string;
  count: number;
  amt: number;
  discount: number;
  subtotal: number;
  detail: string;
}
