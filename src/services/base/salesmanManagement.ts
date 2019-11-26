import request from '@/utils/request';
import { stringify } from 'qs';
import {
  SalemanListParamsType,
  SalemanCreateParamsType,
  SalemanCapacityParamsType,
  SalemansStateParamsType,
} from '@/interfaces/base';

// 业务员列表接口
export async function salemanList(params: SalemanListParamsType) {
  const { companyType, ...query } = params;
  return request(`/api/${companyType}/admin/salemans?${stringify(query)}`);
}

// 业务员创建接口
export async function salemanCreate(params: SalemanCreateParamsType) {
  const { companyType, saleman } = params;
  return request(`/api/${companyType}/admin/saleman`, {
    method: 'POST',
    data: saleman,
  });
}

// 库容修改接口
export async function salemanCapacity(params: SalemanCapacityParamsType) {
  const { companyType, salemanToken, form } = params;
  return request(`/api/${companyType}/admin/saleman/${salemanToken}`, {
    method: 'PUT',
    data: form,
  });
}

// 业务员状态接口
export async function salemanState(params: SalemansStateParamsType) {
  const { companyType, salemanToken, val } = params;
  return request(`/api/${companyType}/admin/saleman/${salemanToken}/state?${stringify(val)}`, {
    method: 'PUT',
  });
}
