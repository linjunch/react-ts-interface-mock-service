import request from '@/utils/request';
import { OperatorRecordParamsType } from '@/interfaces/base';
import { stringify } from 'qs';

export async function operatorRecord(params: OperatorRecordParamsType) {
  const { companyType, recordType, token, ...restProps } = params;
  return request(`/api/${companyType}/common/trends/${recordType}/${token}?${stringify(restProps)}`);
}
