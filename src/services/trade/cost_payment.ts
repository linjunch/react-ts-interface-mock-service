import request from '@/utils/request';
import { stringify } from 'qs';
import {
  PaymentListParamsType,
  PaymentDetailParamsType,
  PaymentCreateParamsType,
  PaymentChangeParamsType,
  PaymentStepParamsType,
  PaymentDeleteParamsType,
  PaymentItemListParamsType,
  PaymentItemCreateParamsType,
  PaymentItemChangeParamsType,
  PaymentItemDeleteParamsType,
} from '@/interfaces/trade';

// 货款结账列表接口
export async function paymentList(params: PaymentListParamsType) {
  return request(`/api/trade/cost/payments?${stringify(params)}`);
}

// 货款结账详情接口
export async function paymentDetail(params: PaymentDetailParamsType) {
  const { paymentToken } = params;
  return request(`/api/trade/cost/payment/${paymentToken}/detail`);
}

// 货款结账创建接口
export async function paymentCreate(params: PaymentCreateParamsType) {
  const { submit, payment } = params;
  return request(`/api/trade/cost/payment?${stringify(submit)}`, {
    method: 'POST',
    data: payment,
  });
}

// 货款结账修改接口
export async function paymentChange(params: PaymentChangeParamsType) {
  const { paymentToken, submit, payment } = params;
  return request(`/api/trade/cost/payment/${paymentToken}?${stringify(submit)}`, {
    method: 'PUT',
    data: payment,
  });
}

// 货款结账进度接口
export async function paymentStep(params: PaymentStepParamsType) {
  const { paymentToken, paymentStep } = params;
  return request(`/api/trade/cost/payment/${paymentToken}/step/${paymentStep}`, {
    method: 'PUT',
  });
}

// 货款结账删除接口
export async function paymentDelete(params: PaymentDeleteParamsType) {
  const { paymentToken } = params;
  return request(`/api/trade/cost/payment/${paymentToken}`, {
    method: 'Delete ',
  });
}

// 结账明细列表接口
export async function paymentItemList(params: PaymentItemListParamsType) {
  const { paymentToken } = params;
  return request(`/api/trade/cost/payment/${paymentToken}/items`);
}

// 结账明细创建接口
export async function paymentItemCreate(params: PaymentItemCreateParamsType) {
  const { paymentToken, paymentItem } = params;
  return request(`/api/trade/cost/payment/${paymentToken}/items`, {
    method: 'POST',
    data: paymentItem,
  });
}

// 结账明细修改接口
export async function paymentItemChange(params: PaymentItemChangeParamsType) {
  const { paymentToken, paymentItemToken, paymentItem } = params;
  return request(`/api/trade/cost/payment/${paymentToken}/item/${paymentItemToken}`, {
    method: 'PUT',
    data: paymentItem,
  });
}

// 结账明细删除接口
export async function paymentItemDelete(params: PaymentItemDeleteParamsType) {
  const { paymentToken, paymentItemToken } = params;
  return request(`/api/trade/cost/payment/${paymentToken}/item/${paymentItemToken}`, {
    method: 'DELETE',
  });
}
