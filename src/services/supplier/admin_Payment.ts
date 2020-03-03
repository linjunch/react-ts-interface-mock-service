import request from '@/utils/request';
import { stringify } from 'qs';
import {
  AdminPaymentListParamsType,
  AdminPaymentDetailParamsType,
  AdminPaymentItemListParamsType,
} from '@/interfaces/supplier';

// 货款结账列表接口
export async function adminPaymentList(params: AdminPaymentListParamsType) {
  return request(`/api/supplier/admin/payments?${stringify(params)}`);
}

// 货款结账详情接口
export async function adminPaymentDetail(params: AdminPaymentDetailParamsType) {
  const { paymentToken } = params;
  return request(`/api/supplier/admin/payment/${paymentToken}/detail`);
}

// 结账明细列表接口
export async function adminPaymentItemList(params: AdminPaymentItemListParamsType) {
  const { paymentToken } = params;
  return request(`/api/supplier/admin/payment/${paymentToken}/items`);
}
