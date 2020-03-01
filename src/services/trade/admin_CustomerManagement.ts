import request from '@/utils/request';
import { stringify } from 'qs';
import {
  AdminSupplierListParamsType,
  AdminSupplierDetailParamsType,
  AdminFactoryListParamsType,
  AdminFactoryDetailParamsType,
  AdminOwnerListParamsType,
  AdminOwnerDetailParamsType,
  AdminContractListParamsType,
  AdminContractDetailParamsType,
  AdminContractStateParamsType,
  AdminAccountDetailParamsType,
  AdminSupplierCreateParamsType,
  AdminVisitListParamsType,
  AdminVisitDetailParamsType,
  AdminCustomerRemarksListParamsType,
  AdminContactsListParamsType,
  AdminSalesmenListParamsType,
  AdminSalesmenCreateParamsType,
  AdminSalesmenStateParamsType,
  AdminSalesmenDeleteParamsType,
} from '@/interfaces/trade';

// 客户列表接口
export async function adminSupplierList(params: AdminSupplierListParamsType) {
  return request(`/api/trade/admin/suppliers?${stringify(params)}`);
}

// 客户详情接口
export async function adminSupplierDetail(params: AdminSupplierDetailParamsType) {
  const { supplierToken } = params;
  return request(`/api/trade/admin/supplier/${supplierToken}/detail`);
}

// 生产单位列表接口
export async function adminFactoryList(params: AdminFactoryListParamsType) {
  const { supplierToken, ...query } = params;
  return request(`/api/trade/admin/supplier/${supplierToken}/factorys?${stringify(query)}`);
}

// 生产单位详情接口
export async function adminFactoryDetail(params: AdminFactoryDetailParamsType) {
  const { factoryToken } = params;
  return request(`/api/trade/admin/factory/${factoryToken}/detail`);
}

// 销售单位列表接口
export async function adminOwnerList(params: AdminOwnerListParamsType) {
  const { supplierToken, ...query } = params;
  return request(`/api/trade/admin/supplier/${supplierToken}/owners?${stringify(query)}`);
}

// 销售单位详情接口
export async function AdminOwnerDetail(params: AdminOwnerDetailParamsType) {
  const { ownerToken } = params;
  return request(`/api/trade/admin/owner/${ownerToken}/detail`);
}

// 协议列表接口
export async function adminContractList(params: AdminContractListParamsType) {
  const { supplierToken, ...query } = params;
  return request(`/api/trade/admin/supplier/${supplierToken}/contracts?${stringify(query)}`);
}

// 协议详情接口
export async function adminContractDetail(params: AdminContractDetailParamsType) {
  const { contractToken } = params;
  return request(`/api/trade/admin/contract/${contractToken}/detail`);
}

// 协议状态接口
export async function adminContractState(params: AdminContractStateParamsType) {
  const { contractToken, val } = params;
  return request(`/api/trade/admin/contract/${contractToken}/state?${stringify(val)}`, {
    method: 'PUT',
  });
}

// 默认账号详情接口
export async function adminAccountDetail(params: AdminAccountDetailParamsType) {
  const { supplierToken } = params;
  return request(`/api/trade/admin/supplier/${supplierToken}/account`);
}

// 客户创建接口
export async function adminSupplierCreate(params: AdminSupplierCreateParamsType) {
  const { supplier } = params;
  return request(`/api/trade/admin/supplier`, {
    method: 'POST',
    data: supplier,
  });
}

// 客户拜访列表接口
export async function adminVisitList(params: AdminVisitListParamsType) {
  return request(`/api/trade/admin/supplier/visits?${stringify(params)}`);
}

// 客户拜访详情接口
export async function adminVisitDetail(params: AdminVisitDetailParamsType) {
  const { visitToken } = params;
  return request(`/api/trade/admin/visit/${visitToken}/detail`);
}

// 客户备注列表接口
export async function adminCustomerRemarksList(params: AdminCustomerRemarksListParamsType) {
  return request(`/api/trade/admin/supplier/remarks?${stringify(params)}`);
}

// 联系人列表接口
export async function adminContactsList(params: AdminContactsListParamsType) {
  return request(`/api/trade/admin/supplier/contacts?${stringify(params)}`);
}

// 客户指派列表接口
export async function adminSalesmenList(params: AdminSalesmenListParamsType) {
  const { supplierToken } = params;
  return request(`/api/trade/admin/supplier/${supplierToken}/salesmen`);
}

// 客户指派创建接口
export async function adminSalesmenCreate(params: AdminSalesmenCreateParamsType) {
  const { supplierToken, salesmanToken } = params;
  return request(`/api/trade/admin/supplier/${supplierToken}/salesman/${salesmanToken}`, {
    method: 'POST',
  });
}

// 客户指派状态接口
export async function adminSalesmenState(params: AdminSalesmenStateParamsType) {
  const { supplierToken, salesmanToken, val } = params;
  return request(
    `/api/trade/admin/supplier/${supplierToken}/salesman/${salesmanToken}/state?${stringify(val)}`,
    {
      method: 'PUT',
    },
  );
}

// 客户指派删除接口
export async function adminSalesmenDelete(params: AdminSalesmenDeleteParamsType) {
  const { supplierToken, salesmanToken } = params;
  return request(`/api/trade/admin/supplier/${supplierToken}/salesman/${salesmanToken}`, {
    method: 'DELETE',
  });
}
