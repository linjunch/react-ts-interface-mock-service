import request from '@/utils/request';
import { stringify } from 'qs';
import { LoginParamsType, RegisterParamsType } from '@/interfaces/base';

export async function login(params: LoginParamsType) {
  const { companyType, form } = params;
  return request(`/api/${companyType}/login`, {
    method: 'POST',
    data: form,
  });
}

export async function register(params: RegisterParamsType) {
  const { companyType, form, source } = params;
  return request(`/api/${companyType}/register?${stringify(source)}`, {
    method: 'POST',
    data: form,
  });
}
