import request from '@/utils/request';
import { stringify } from 'qs';
import {
  SupplierListParamsType,
  SupplierDetailParamsType,
  FactoryListParamsType,
  FactoryDetailParamsType,
  OwnerListParamsType,
  OwnerDetailParamsType,
  ContractListparamsType,
  ContractDetailparamsType,
  ContractCheckparamsType,
  ContractCreateparamsType,
  ContractChangeparamsType,
} from '@/interfaces/trade';

// 客户列表接口
export async function supplierList(params: SupplierListParamsType) {
  return request(`/api/trade/sales/suppliers?${stringify(params)}`);
}

// 客户详情接口
export async function supplierDetail(params: SupplierDetailParamsType) {
  const { supplierToken } = params;
  return request(`/api/trade/sales/supplier/${supplierToken}/detail`);
}

// 生产单位列表接口
export async function FactoryList(params: FactoryListParamsType) {
  const { supplierToken, ...query } = params;
  return request(`/api/trade/sales/supplier/${supplierToken}/factorys?${stringify(query)}`);
}

// 生产单位详情接口
export async function factoryDetail(params: FactoryDetailParamsType) {
  const { factoryToken } = params;
  return request(`/api/trade/sales/factory/${factoryToken}/detail`);
}

// 销售单位列表接口
export async function OwnerList(params: OwnerListParamsType) {
  const { supplierToken, ...query } = params;
  return request(`/api/trade/sales/supplier/${supplierToken}/owners?${stringify(query)}`);
}

// 销售单位详情接口
export async function ownerDetail(params: OwnerDetailParamsType) {
  const { ownerToken } = params;
  return request(`/api/trade/sales/owner/${ownerToken}/detail`);
}

// 协议列表接口
export async function contractList(params: ContractListparamsType) {
  const { supplierToken, ...query } = params;
  return request(`/api/trade/sales/supplier/${supplierToken}/contracts?${stringify(query)}`);
}

// 协议详情接口
export async function contractDetail(params: ContractDetailparamsType) {
  const { contractToken } = params;
  return request(`/api/trade/sales/contract/${contractToken}/detail`);
}

// 协议查验接口
export async function contractCheck(params: ContractCheckparamsType) {
  const { contractToken, form } = params;
  return request(`/api/trade/sales/contract/${contractToken}/step/check`, {
    method: 'PUT',
    data: form,
  });
}

// 协议创建接口
export async function contractCreate(params: ContractCreateparamsType) {
  const { supplierToken, submit, contract } = params;
  return request(`/api/trade/sales/supplier/${supplierToken}/contract?${stringify(submit)}`, {
    method: 'POST',
    data: contract,
  });
}

// 协议修改接口
export async function ContractChange(params: ContractChangeparamsType) {
  const { supplierToken, contractToken, submit, contract } = params;
  return request(
    `/api/trade/sales/supplier/${supplierToken}/contract/${contractToken}?${stringify(submit)}`,
    {
      method: 'PUT',
      data: contract,
    },
  );
}
