import request from '@/utils/request';
import { stringify } from 'qs';
import {
  AdminBillListParamsType,
  AdminBillDetailParamsType,
  AdminBillItemListParamsType,
} from '@/interfaces/supplier';

// 订单结算列表接口
export async function AdminBillList(params: AdminBillListParamsType) {
  return request(`/api/supplier/admin/bills?${stringify(params)}`);
}

// 订单结算详情接口
export async function AdminBillDetail(params: AdminBillDetailParamsType) {
  const { billToken } = params;
  return request(`/api/supplier/admin/bill/${billToken}/detail`);
}

// 结算明细列表接口
export async function AdminBillItemList(params: AdminBillItemListParamsType) {
  const { billToken } = params;
  return request(`/api/supplier/admin/bill/${billToken}/items`);
}
