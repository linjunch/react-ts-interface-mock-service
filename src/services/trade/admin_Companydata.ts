import request from '@/utils/request';
import { BaseDataChangeParamsType, InfoChangeParamsType } from '@/interfaces/trade';

// 基本资料详情接口
export async function baseDataDetail() {
  return request(`/api/trade/admin/company/detail`);
}

// 基本资料修改接口
export async function baseDataChange(params: BaseDataChangeParamsType) {
  const { company } = params;
  return request(`/api/trade/admin/company`, {
    method: 'PUT',
    data: company,
  });
}

// 认证信息详情接口
export async function infoDetail() {
  return request(`/api/trade/admin/company/info`);
}

// 认证信息修改接口
export async function InfoChange(params: InfoChangeParamsType) {
  const { company } = params;
  return request(`/api/trade/admin/company`, {
    method: 'PUT',
    data: company,
  });
}
