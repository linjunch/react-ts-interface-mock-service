import request from '@/utils/request';
import { stringify } from 'qs';
import {
  CustomerListParamsType,
  CustomerDetailParamsType,
  FactoryListParamsType,
  FactoryDetailParamsType,
  FactoryStepParamsType,
  OwnerListParamsType,
  OwnerDetailParamsType,
  OwnerStepParamsType,
  TradeListParamsType,
  TradeDetailParamsType,
  TradeStepParamsType,
  TradeLockParamsType,
} from '@/interfaces/operate';

// 客户列表接口
export async function customerList(params: CustomerListParamsType) {
  const { type, ...query } = params;
  return request(`/api/operator/service/suppliers/${type}?${stringify(query)}`);
}
// 客户详情接口
export async function customerDetail(params: CustomerDetailParamsType) {
  const { supplierToken } = params;
  return request(`/api/operator/service/supplier/${supplierToken}/detail`);
}

// 生产单位列表接口
export async function factoryList(params: FactoryListParamsType) {
  const { supplierToken, ...query } = params;
  return request(`/api/operator/service/supplier/${supplierToken}/factorys?${stringify(query)}`);
}
// 生产单位详情接口
export async function factoryDetail(params: FactoryDetailParamsType) {
  const { factoryToken } = params;
  return request(`/api/operator/service/factory/${factoryToken}/detail`);
}
// 生产单位审核接口
export async function factoryStep(params: FactoryStepParamsType) {
  const { factoryToken, checkStep } = params;
  return request(`/api/operator/service/factory/${factoryToken}/step/${checkStep}`, {
    method: 'PUT',
  });
}

// 销售单位列表接口
export async function ownerList(params: OwnerListParamsType) {
  const { supplierToken, ...query } = params;
  return request(`/api/operator/service/supplier/${supplierToken}/owners?${stringify(query)}`);
}
// 销售单位详情接口
export async function ownerDetail(params: OwnerDetailParamsType) {
  const { ownerToken } = params;
  return request(`/api/operator/service/owner/${ownerToken}/detail`);
}
// 销售单位审核接口
export async function ownerStep(params: OwnerStepParamsType) {
  const { ownerToken, checkStep } = params;
  return request(`/api/operator/service/owner/${ownerToken}/step/${checkStep}`, {
    method: 'PUT',
  });
}

// 自营发货人列表接口
export async function tradeList(params: TradeListParamsType) {
  const { supplierToken, ...query } = params;
  return request(`/api/operator/service/supplier/${supplierToken}/trades?${stringify(query)}`);
}
// 自营发货人详情接口
export async function tradeDetail(params: TradeDetailParamsType) {
  const { tradeToken } = params;
  return request(`/api/operator/service/trade/${tradeToken}/detail`);
}
// 自营发货人审核接口
export async function tradeStep(params: TradeStepParamsType) {
  const { tradeToken, checkStep } = params;
  return request(`/api/operator/service/trade/${tradeToken}/step/${checkStep}`, {
    method: 'PUT',
  });
}
// 自营发货人锁接口
export async function tradeLock(params: TradeLockParamsType) {
  const { tradeToken, lockStatus } = params;
  return request(`/api/operator/service/trade/${tradeToken}/${lockStatus}`, {
    method: 'PUT',
  });
}
