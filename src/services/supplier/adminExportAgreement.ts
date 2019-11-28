import request from '@/utils/request';
import { stringify } from 'qs';
import {
  ContractListParamsType,
  ContractDetailParamsType,
  ContractSignParamsType,
  ContractRefuseParamsType,
} from '@/interfaces/supplier';

// 协议列表接口
export async function contractsList(params: ContractListParamsType) {
  return request(`/api/supplier/admin/contracts${stringify(params)}`);
}

// 协议详情接口
export async function contractsDetail(params: ContractDetailParamsType) {
  const { contractToken } = params;
  return request(`/api/supplier/admin/contract/${contractToken}/detail`);
}

// 协议签订接口
export async function contractSign(params: ContractSignParamsType) {
  const { contractToken, form } = params;
  return request(`/api/supplier/admin/contract/${contractToken}/step/sign`, {
    method: 'PUT',
    data: form,
  });
}

// 协议拒绝接口
export async function contractRefuse(params: ContractRefuseParamsType) {
  const { contractToken } = params;
  return request(`/api/supplier/admin/contract/${contractToken}/step/refuse`, {
    method: 'PUT',
  });
}
