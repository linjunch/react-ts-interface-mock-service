import request from '@/utils/request';
import { stringify } from 'qs';
import {
  ContractListParamsType,
  ContractDetailParamsType,
  ContractStepParamsType,
} from '@/interfaces/operate';

// 协议列表接口
export async function contractList(params: ContractListParamsType) {
  return request(`/api/operator/service/contracts?${stringify(params)}`);
}
// 协议详情接口
export async function contractDetail(params: ContractDetailParamsType) {
  const { contractToken } = params;
  return request(`/api/operator/service/contract/${contractToken}/detail`);
}
// 协议进度接口
export async function contractStep(params: ContractStepParamsType) {
  const { contractToken, contractStep } = params;
  return request(`/api/operator/service/contract/${contractToken}/step/${contractStep}`, {
    method: 'PUT',
  });
}
