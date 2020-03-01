import request from '@/utils/request';
import { stringify } from 'qs';
import {
  CostRateListParamsType,
  CostRateCreateParamsType,
  CostRateChangeParamsType,
} from '@/interfaces/operate';

// 汇率列表接口
export async function costRateList(params: CostRateListParamsType) {
  return request(`/api/operator/cost/costRates?${stringify(params)}`);
}
// 汇率创建接口
export async function costRateCreate(params: CostRateCreateParamsType) {
  const { costRate } = params;
  return request(`/api/operator/cost/costRate`, {
    method: 'POST',
    data: costRate,
  });
}
// 汇率修改接口
export async function costRateChange(params: CostRateChangeParamsType) {
  const { costRateToken, costRate } = params;
  return request(`/api/operator/cost/costRate/${costRateToken}`, {
    method: 'PUT',
    data: costRate,
  });
}
