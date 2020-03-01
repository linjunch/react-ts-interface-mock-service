import request from '@/utils/request';
import { stringify } from 'qs';
import {
  CompanyChangeParamsType,
  TradeListParamsType,
  TradeDetailParamsType,
  TradeCreateParamsType,
  TradeChangeParamsType,
  TradeStateParamsType,
  FactoryListParamsType,
  FactoryDetailParamsType,
  FactoryCreateParamsType,
  FactoryChangeParamsType,
  FactoryStateParamsType,
  FactorySalesmenListParamsType,
  FactorySalesmenCreateParamsType,
  FactorySalesmenStateParamsType,
  FactorySalesmenDeteteParamsType,
  OwnerListParamsType,
  OwnerDetailParamsType,
  OwnerCreateParamsType,
  OwnerChangeParamsType,
  OwnerStateParamsType,
} from '@/interfaces/supplier';

// 基本资料详情接口
export async function companyDetail() {
  return request(`/api/supplier/admin/company/detail`);
}

// 基本资料修改接口
export async function companyChange(params: CompanyChangeParamsType) {
  const { company } = params;
  return request(`/api/supplier/admin/company`, {
    method: 'PUT',
    data: company,
  });
}

// 自营发货人列表接口
export async function tradeList(params: TradeListParamsType) {
  return request(`/api/supplier/admin/trades?${stringify(params)}`);
}

// 自营发货人详情接口
export async function tradeDetail(params: TradeDetailParamsType) {
  const { tradeToken } = params;
  return request(`/api/supplier/admin/trade/${tradeToken}/detail`);
}

// 自营发货人创建接口
export async function tradeCreate(params: TradeCreateParamsType) {
  const { trade } = params;
  return request(`/api/supplier/admin/trade`, {
    method: 'POST',
    data: trade,
  });
}

// 自营发货人修改接口
export async function tradeChange(params: TradeChangeParamsType) {
  const { tradeToken, trade } = params;
  return request(`/api/supplier/admin/trade/${tradeToken}`, {
    method: 'PUT',
    data: trade,
  });
}

// 自营发货人状态接口
export async function tradeState(params: TradeStateParamsType) {
  const { tradeToken, val } = params;
  return request(`/api/supplier/admin/trade/${tradeToken}/state?${stringify(val)}`, {
    method: 'PUT',
  });
}

// 生产单位列表接口
export async function factoryList(params: FactoryListParamsType) {
  return request(`/api/supplier/admin/factorys?${stringify(params)}`);
}

// 生产单位详情接口
export async function factoryDetail(params: FactoryDetailParamsType) {
  const { factoryToken } = params;
  return request(`/api/supplier/admin/factory/${factoryToken}/detail`);
}

// 生产单位创建接口
export async function factoryCreate(params: FactoryCreateParamsType) {
  const { factory } = params;
  return request(`/api/supplier/admin/factory`, {
    method: 'POST',
    data: factory,
  });
}

// 生产单位修改接口
export async function factoryChange(params: FactoryChangeParamsType) {
  const { factoryToken, factory } = params;
  return request(`/api/supplier/admin/factory/${factoryToken}`, {
    method: 'PUT',
    data: factory,
  });
}

// 生产单位状态接口
export async function factoryState(params: FactoryStateParamsType) {
  const { factoryToken, val } = params;
  return request(`/api/supplier/admin/factory/${factoryToken}/state?${stringify(val)}`, {
    method: 'PUT',
  });
}

// 生产单位指派列表接口
export async function factorySalesmenList(params: FactorySalesmenListParamsType) {
  const { factoryToken } = params;
  return request(`/supplier/admin/factory/${factoryToken}/salesmen`);
}

// 生产单位指派创建接口
export async function factorySalesmenCreate(params: FactorySalesmenCreateParamsType) {
  const { factoryToken, salesmanToken } = params;
  return request(`/api/supplier/admin/factory/${factoryToken}/salesman/${salesmanToken}`, {
    method: 'POST',
  });
}

// 生产单位指派状态接口
export async function factorySalesmenState(params: FactorySalesmenStateParamsType) {
  const { factoryToken, salesmanToken, val } = params;
  return request(
    `/api/supplier/admin/factory/${factoryToken}/salesman/${salesmanToken}/state?${stringify(val)}`,
    {
      method: 'POST',
    },
  );
}

// 生产单位指派删除接口
export async function FactorySalesmenDetete(params: FactorySalesmenDeteteParamsType) {
  const { factoryToken, salesmanToken } = params;
  return request(`/api/supplier/admin/factory/${factoryToken}/salesman/${salesmanToken}`, {
    method: 'DELETE',
  });
}

// 销售单位列表接口
export async function ownerList(params: OwnerListParamsType) {
  return request(`/api/supplier/admin/owners?${stringify(params)}`);
}

// 销售单位详情接口
export async function ownerDetail(params: OwnerDetailParamsType) {
  const { ownerToken } = params;
  return request(`/api/supplier/admin/owner/${ownerToken}/detail`);
}

// 销售单位创建接口
export async function ownerCreate(params: OwnerCreateParamsType) {
  const { owner } = params;
  return request(`/api/supplier/admin/owner`, {
    method: 'POST',
    data: owner,
  });
}

// 销售单位修改接口
export async function ownerChange(params: OwnerChangeParamsType) {
  const { ownerToken, owner } = params;
  return request(`/api/supplier/admin/owner/${ownerToken}`, {
    method: 'PUT',
    data: owner,
  });
}

// 销售单位状态接口
export async function ownerState(params: OwnerStateParamsType) {
  const { ownerToken, val } = params;
  return request(`/api/supplier/admin/owner/${ownerToken}/state?${stringify(val)}`, {
    method: 'PUT',
  });
}
