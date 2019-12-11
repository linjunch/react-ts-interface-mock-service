import request from '@/utils/request';
import { stringify } from 'qs';
import {
  AdminCustomerListParamsType,
  AdminCustomerDetailParamsType,
  AdminFactoryListParamsType,
  AdminFactoryDetailParamsType,
  AdminFactoryLockParamsType,
  AdminOwnerListParamsType,
  AdminOwnerDetailParamsType,
  AdminOwnerLockParamsType,
  AdminTradeListParamsType,
  AdminTradeDetailParamsType,
  AdminContractListParamsType,
  AdminContractDetailParamsType,
  AdminSalesmenListParamsType,
  AdminSalesmenCreateParamsType,
  AdminSalesmenStateParamsType,
  AdminSalesmenDeleteParamsType,
} from '@/interfaces/operate';

// 客户列表接口
export async function adminCustomerList(params: AdminCustomerListParamsType) {
  return request(`/api/operator/service/suppliers?${stringify(params)}`);
}
// 客户详情接口
export async function adminCustomerDetail(params: AdminCustomerDetailParamsType) {
  const { supplierToken } = params;
  return request(`/api/operator/admin/supplier/${supplierToken}/detail`);
}
// 生产单位列表接口
export async function adminFactoryList(params: AdminFactoryListParamsType) {
  const { supplierToken, ...query } = params;
  return request(`/api/operator/admin/supplier/${supplierToken}/factorys?${stringify(query)}`);
}
// 生产单位详情接口
export async function adminFactoryDetail(params: AdminFactoryDetailParamsType) {
  const { factoryToken } = params;
  return request(`/api/operator/admin/factory/${factoryToken}/detail`);
}
// 生产单位锁接口
export async function adminFactoryLock(params: AdminFactoryLockParamsType) {
  const { factoryToken, lockStatus } = params;
  return request(`/api/operator/admin/factory/${factoryToken}/${lockStatus}`, {
    method: 'PUT',
  });
}
// 销售单位列表接口
export async function adminOwnerList(params: AdminOwnerListParamsType) {
  const { supplierToken, ...query } = params;
  return request(`/api/operator/admin/supplier/${supplierToken}/owners?${stringify(query)}`);
}
// 销售单位详情接口
export async function adminOwnerDetail(params: AdminOwnerDetailParamsType) {
  const { ownerToken } = params;
  return request(`/api/operator/admin/owner/${ownerToken}/detail`);
}
// 销售单位锁接口
export async function adminOwnerLock(params: AdminOwnerLockParamsType) {
  const { ownerToken, lockStatus } = params;
  return request(`/api/operator/admin/owner/${ownerToken}/${lockStatus}`, {
    method: 'PUT',
  });
}
// 自营发货人列表接口
export async function adminTradeList(params: AdminTradeListParamsType) {
  const { supplierToken, ...query } = params;
  return request(`/api/operator/admin/supplier/${supplierToken}/trades?${stringify(query)}`);
}
// 自营发货人详情接口
export async function adminTradeDetail(params: AdminTradeDetailParamsType) {
  const { tradeToken } = params;
  return request(`/api/operator/admin/trade/${tradeToken}/detail`);
}
// 协议列表接口
export async function adminContractList(params: AdminContractListParamsType) {
  const { supplierToken, ...query } = params;
  return request(`/api/operator/admin/supplier/${supplierToken}/contracts${stringify(query)}`);
}
// 协议详情接口
export async function adminContractDetail(params: AdminContractDetailParamsType) {
  const { contractToken } = params;
  return request(`/api/operator/admin/contract/${contractToken}/detail`);
}
// 客户指派列表接口
export async function adminSalesmenList(params: AdminSalesmenListParamsType) {
  const { supplierToken, ...query } = params;
  return request(`/api/operator/admin/supplier/${supplierToken}/salesmen${stringify(query)}`);
}
// 客户指派创建接口
export async function adminSalesmenCreate(params: AdminSalesmenCreateParamsType) {
  const { supplierToken, salesmanToken } = params;
  return request(`/api/operator/admin/supplier/${supplierToken}/salesman/${salesmanToken}`, {
    method: 'POST',
  });
}
// 客户指派状态接口
export async function adminSalesmenState(params: AdminSalesmenStateParamsType) {
  const { supplierToken, salesmanToken, val } = params;
  return request(
    `/api/operator/admin/supplier/${supplierToken}/salesman/${salesmanToken}/state?${stringify(
      val,
    )}`,
    {
      method: 'POST',
    },
  );
}
// 客户指派删除接口
export async function adminSalesmenDelete(params: AdminSalesmenDeleteParamsType) {
  const { supplierToken, salesmanToken } = params;
  return request(`/api/operator/admin/supplier/${supplierToken}/salesman/${salesmanToken}`, {
    method: 'DELETE',
  });
}
