import request from '@/utils/request';
import { stringify } from 'qs';
import {
  PaymentListParamsType,
  PaymentDetailParamsType,
  PaymentItemListParamsType,
} from '@/interfaces/supplier';

// 货款结账列表接口
export async function paymentList(params: PaymentListParamsType) {
  return request(`/api/supplier/admin/payments?${stringify(params)}`);
}

// 货款结账详情接口
export async function paymentDetail(params: PaymentDetailParamsType) {
  const { paymentToken } = params;
  return request(`/api/supplier/admin/payment/${paymentToken}/detail`);
}

// 结账明细列表接口
export async function paymentItemList(params: PaymentItemListParamsType) {
  const { paymentToken } = params;
  return request(`/api/supplier/admin/payment/${paymentToken}/items`);
}
