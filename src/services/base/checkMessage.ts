import request from '@/utils/request';
import { CheckMessageParamsType } from '@/interfaces/base';

export async function checkMessage(params: CheckMessageParamsType) {
  const { companyType, trendsType, token } = params;
  return request(`/api/${companyType}/common/trends/${trendsType}/${token}`);
}
