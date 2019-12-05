import request from '@/utils/request';
import { stringify } from 'qs';
import {
  ShBaseParamsType,
  ShIncreaseParamsType,
  ShAttrParamsType,
  LedgerBaseParamsType,
  LedgerIncreaseParamsType,
  LedgerAttrParamsType,
} from '@/interfaces/trade';

// 收汇基础统计接口
export async function shBase(params: ShBaseParamsType) {
  return request(`/api/trade/cost/data/sh/base?${stringify(params)}`);
}

// 收汇增长分析接口
export async function shIncrease(params: ShIncreaseParamsType) {
  return request(`/api/trade/cost/data/sh/increase?${stringify(params)}`);
}
// 收汇属性分布接口
export async function shAttr(params: ShAttrParamsType) {
  return request(`/api/trade/cost/data/sh/attr?${stringify(params)}`);
}

// 退税基础统计接口
export async function ledgerBase(params: LedgerBaseParamsType) {
  return request(`/api/trade/cost/data/ledger/base${stringify(params)}`);
}

// 退税增长分析接口
export async function ledgerIncrease(params: LedgerIncreaseParamsType) {
  return request(`/api/trade/cost/data/ledger/increase${stringify(params)}`);
}

// 退税属性分布接口
export async function ledgerAttr(params: LedgerAttrParamsType) {
  return request(`/api/trade/cost/data/ledger/attr${stringify(params)}`);
}
