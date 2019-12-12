import request from '@/utils/request';
import { stringify } from 'qs';
import {
  EnsembleTradeListParamsType,
  EnsembleTradeDetailParamsType,
  EnsembleTradeCreateParamsType,
  EnsembleTradeStateParamsType,
  DefaultAccountParamsType,
} from '@/interfaces/operate';

// 综服企业列表接口
export async function ensembleTradeList(params: EnsembleTradeListParamsType) {
  return request(`/api/operator/admin/trades?${stringify(params)}`);
}
// 综服企业详情接口
export async function ensembleTradeDetail(params: EnsembleTradeDetailParamsType) {
  const { tradeToken } = params;
  return request(`/api/operator/admin/trade/${tradeToken}/detail`);
}
// 综服企业创建接口
export async function ensembleTradeCreate(params: EnsembleTradeCreateParamsType) {
  const { trade } = params;
  return request(`/api/operator/admin/trade`, {
    method: 'POST',
    data: trade,
  });
}
// 综服企业状态接口
export async function ensembleTradeState(params: EnsembleTradeStateParamsType) {
  const { tradeToken, val } = params;
  return request(`/api/operator/admin/trade/${tradeToken}/state?${stringify(val)}`, {
    method: 'POST',
  });
}
// 默认账号详情接口
export async function defaultAccount(params: DefaultAccountParamsType) {
  const { tradeToken } = params;
  return request(`/api/operator/admin/trade/${tradeToken}/account`);
}
