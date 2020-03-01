import request from '@/utils/request';
import { stringify } from 'qs';
import {
  BillListParamsType,
  BillDetailParamsType,
  BillCreateParamsType,
  BillChangeParamsType,
  BillStepParamsType,
  BillDeleteParamsType,
  BillItemListParamsType,
  BillItemCreateParamsType,
  BillItemChangeParamsType,
  BillItemDeleteParamsType,
} from '@/interfaces/operate';

// 订单结算列表接口
export async function billList(params: BillListParamsType) {
  return request(`/api/operator/cost/bills?${stringify(params)}`);
}

// 订单结算详情接口
export async function billDetail(params: BillDetailParamsType) {
  const { billToken } = params;
  return request(`/api/operator/cost/bill/${billToken}/detail`);
}

// 订单结算创建接口
export async function billCreate(params: BillCreateParamsType) {
  const { submit, bill } = params;
  return request(`/api/operator/cost/bill?${stringify(submit)}`, {
    method: 'POST',
    data: bill,
  });
}

// 订单结算修改接口
export async function billChange(params: BillChangeParamsType) {
  const { billToken, submit, bill } = params;
  return request(`/api/operator/cost/bill/${billToken}?${stringify(submit)}`, {
    method: 'PUT',
    data: bill,
  });
}

// 订单结算进度接口
export async function billStep(params: BillStepParamsType) {
  const { billToken, billStep } = params;
  return request(`/api/operator/cost/bill/${billToken}/step/${billStep}`, {
    method: 'PUT',
  });
}

// 订单结算删除接口
export async function billDelete(params: BillDeleteParamsType) {
  const { billToken } = params;
  return request(`/api/operator/cost/bill/${billToken}`, {
    method: 'Delete',
  });
}

// 结算明细列表接口
export async function billItemList(params: BillItemListParamsType) {
  const { billToken } = params;
  return request(`/api/operator/cost/bill/${billToken}/items`);
}

// 结算明细创建接口
export async function billItemCreate(params: BillItemCreateParamsType) {
  const { billToken, billItem } = params;
  return request(`/api/operator/cost/bill/${billToken}/item`, {
    method: 'POST',
    data: billItem,
  });
}

// 结算明细修改接口
export async function billItemChange(params: BillItemChangeParamsType) {
  const { billToken, itemToken, billItem } = params;
  return request(`/api/operator/cost/bill/${billToken}/item/${itemToken}`, {
    method: 'PUT',
    data: billItem,
  });
}

// 结算明细删除接口
export async function billItemDelete(params: BillItemDeleteParamsType) {
  const { billToken, itemToken } = params;
  return request(`/api/operator/cost/bill/${billToken}/item/${itemToken}`, {
    method: 'Delete',
  });
}
