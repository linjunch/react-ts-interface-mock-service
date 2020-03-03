import request from '@/utils/request';
import { stringify } from 'qs';
import { AdminShListParamsType, AdminShDetailParamsType } from '@/interfaces/supplier';

// 收汇列表接口
export async function adminShList(params: AdminShListParamsType) {
  return request(`/api/supplier/admin/shs?${stringify(params)}`);
}

// 收汇详情接口
export async function adminShDetail(params: AdminShDetailParamsType) {
  const { shToken } = params;
  return request(`/api/supplier/admin/sh/${shToken}/detail`);
}
