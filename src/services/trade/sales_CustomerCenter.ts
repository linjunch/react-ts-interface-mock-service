import request from '@/utils/request';
import { stringify } from 'qs';
import {
  VisitListParamsType,
  VisitDetailParamsType,
  VisitCreateParamsType,
  CustomerRemarkListParamsType,
  CustomerRemarkCreateParamsType,
  ContactListParamsType,
  ContactCreateParamsType,
  ContactChangeParamsType,
} from '@/interfaces/trade';

// 客户拜访列表接口
export async function visitList(params: VisitListParamsType) {
  const { customerType, ...query } = params;
  return request(`/api/trade/sales/${customerType}/visits?${stringify(query)}`);
}

// 客户拜访详情接口
export async function visitDetail(params: VisitDetailParamsType) {
  const { visitToken } = params;
  return request(`/api/trade/sales/visit/${visitToken}/detail`);
}

// 客户拜访创建接口
export async function visitCreate(params: VisitCreateParamsType) {
  const { customerType, token, visit } = params;
  return request(`/api/trade/sales/${customerType}/visit?${stringify(token)}`, {
    method: 'POST',
    data: visit,
  });
}

// 客户备注列表接口
export async function customerRemarkList(params: CustomerRemarkListParamsType) {
  const { customerType, token } = params;
  return request(`/api/trade/sales/${customerType}/remarks?${stringify(token)}`);
}

// 客户备注创建接口
export async function customerRemarkCreate(params: CustomerRemarkCreateParamsType) {
  const { customerType, token, remark } = params;
  return request(`/api/trade/sales/${customerType}/remark?${stringify(token)}`, {
    method: 'POST',
    data: remark,
  });
}

// 联系人列表接口
export async function contactList(params: ContactListParamsType) {
  const { customerType, token } = params;
  return request(`/api/trade/sales/${customerType}/contacts?${stringify(token)}`);
}

// 联系人创建接口
export async function contactCreate(params: ContactCreateParamsType) {
  const { customerType, token, contact } = params;
  return request(`/api/trade/sales/${customerType}/contact?${stringify(token)}`, {
    method: 'POST',
    data: contact,
  });
}

// 联系人修改接口
export async function contactChange(params: ContactChangeParamsType) {
  const { contactToken, contact } = params;
  return request(`/api/trade/sales/contact/${contactToken}`, {
    method: 'PUT',
    data: contact,
  });
}
