import request from '@/utils/request';
import { stringify } from 'qs';
import {
  ShListParamsType,
  ShDetailParamsType,
  ShCreateParamsType,
  ShReturnChangeParamsType,
  ShJhParamsType,
  ShStepPassParamsType,
  ShAffirmParamsType,
  ShVerifyParamsType,
  ShReaffirmParamsType,
  BankListParamsType,
  BankCreateParamsType,
  BankChangeParamsType,
  BankStateParamsType,
  BankDeleteParamsType,
} from '@/interfaces/trade';

// 收汇列表接口
export async function shList(params: ShListParamsType) {
  return request(`/api/trade/cost/shs?${stringify(params)}`);
}

// 收汇详情接口
export async function shDetail(params: ShDetailParamsType) {
  const { shToken } = params;
  return request(`/api/trade/cost/sh/${shToken}/detail`);
}

// 收汇创建接口
export async function shCreate(params: ShCreateParamsType) {
  const { submit, sh } = params;
  return request(`/api/trade/cost/sh?${stringify(submit)}`, {
    method: 'POST',
    data: sh,
  });
}

// 收汇返回修改接口
export async function shReturnChange(params: ShReturnChangeParamsType) {
  const { shToken } = params;
  return request(`/api/trade/cost/sh/${shToken}/step/return`, {
    method: 'PUT',
  });
}

// 收汇结汇接口
export async function shJh(params: ShJhParamsType) {
  const { shToken, submit, jh } = params;
  return request(`/api/trade/cost/sh/${shToken}/step/jh?${stringify(submit)}`, {
    method: 'PUT',
    data: jh,
  });
}

// 收汇审核通过接口
export async function shStepPass(params: ShStepPassParamsType) {
  const { shToken } = params;
  return request(`/api/trade/cost/sh/${shToken}/step/pass`, {
    method: 'PUT',
  });
}

// 收汇匹配接口
export async function shAffirm(params: ShAffirmParamsType) {
  const { shToken, affirm } = params;
  return request(`/api/trade/cost/sh/${shToken}/step/affirm`, {
    method: 'PUT',
    data: affirm,
  });
}

// 收汇核对接口
export async function shVerify(params: ShVerifyParamsType) {
  const { shToken } = params;
  return request(`/api/trade/cost/sh/${shToken}/step/verify`, {
    method: 'PUT',
  });
}

// 收汇重新匹配接口
export async function shReaffirm(params: ShReaffirmParamsType) {
  const { shToken } = params;
  return request(`/api/trade/cost/sh/${shToken}/step/reaffirm`, {
    method: 'PUT',
  });
}

// 银行列表接口
export async function bankList(params: BankListParamsType) {
  return request(`/api/trade/cost/banks?${stringify(params)}`);
}

// 银行创建接口
export async function bankCreate(params: BankCreateParamsType) {
  const { bank } = params;
  return request(`/api/trade/cost/bank`, {
    method: 'POST',
    data: bank,
  });
}

// 银行修改接口
export async function bankChange(params: BankChangeParamsType) {
  const { bank, bankToken } = params;
  return request(`/api/trade/cost/bank/${bankToken}`, {
    method: 'PUT',
    data: bank,
  });
}

// 银行状态接口
export async function bankState(params: BankStateParamsType) {
  const { val, bankToken } = params;
  return request(`/api/trade/cost/bank/${bankToken}/state?${stringify(val)}`, {
    method: 'PUT',
  });
}

// 银行删除接口
export async function bankDelete(params: BankDeleteParamsType) {
  const { bankToken } = params;
  return request(`/api/trade/cost/bank/${bankToken}`, {
    method: 'Delete ',
  });
}
