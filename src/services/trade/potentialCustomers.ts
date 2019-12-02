import request from '@/utils/request';
import { stringify } from 'qs';
import {
  PotentialCustomerListParamsType,
  PotentialCustomerDetailParamsType,
  PotentialCustomerIncludeParamsType,
  PotentialCustomerOutsideParamsType,
  PotentialCustomerCreateParamsType,
} from '@/interfaces/trade';

// 潜在客户列表接口
export async function potentialCustomerList(params: PotentialCustomerListParamsType) {
  return request(`/api/trade/sales/customers?${stringify(params)}`);
}

// 潜在客户详情接口
export async function potentialCustomerDetail(params: PotentialCustomerDetailParamsType) {
  const { customerToken } = params;
  return request(`/api/trade/sales/customer/${customerToken}/detail`);
}

// 潜在客户捡入接口
export async function PotentialCustomerInclude(params: PotentialCustomerIncludeParamsType) {
  const { customerToken } = params;
  return request(`/api/trade/sales/customer/${customerToken}/include`, {
    method: 'PUT',
  });
}

// 潜在客户开放接口
export async function PotentialCustomerOutside(params: PotentialCustomerOutsideParamsType) {
  const { customerToken } = params;
  return request(`/api/trade/sales/customer/${customerToken}/outside`, {
    method: 'PUT',
  });
}

// 潜在客户创建接口
export async function PotentialCustomerCreate(params: PotentialCustomerCreateParamsType) {
  const { form } = params;
  return request(`/api/trade/sales/customer`, {
    method: 'POST',
    data: form,
  });
}
