import request from '@/utils/request';
import { stringify } from 'qs';
import { ShListParamsType, ShDetailParamsType } from '@/interfaces/supplier';

// 收汇列表接口
export async function shList(params: ShListParamsType) {
  return request(`/api/supplier/sales/shs?${stringify(params)}`);
}

// 收汇详情接口
export async function shDetail(params: ShDetailParamsType) {
  const { shToken } = params;
  return request(`/api/supplier/sales/sh/${shToken}/detail`);
}
