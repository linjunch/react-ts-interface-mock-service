import request from '@/utils/request';
import { stringify } from 'qs';
import {
  BillListParamsType,
  BillDetailParamsType,
  BillItemListParamsType,
} from '@/interfaces/supplier';

// 订单结算列表接口
export async function billList(params: BillListParamsType) {
  return request(`/api/supplier/sales/bills?${stringify(params)}`);
}

// 订单结算详情接口
export async function billDetail(params: BillDetailParamsType) {
  const { billToken } = params;
  return request(`/api/supplier/sales/bill/${billToken}/detail`);
}

// 结算明细列表接口
export async function billItemList(params: BillItemListParamsType) {
  const { billToken } = params;
  return request(`/api/supplier/sales/bill/${billToken}/items`);
}
