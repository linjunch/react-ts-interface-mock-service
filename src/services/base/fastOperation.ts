import request from '@/utils/request';
import { stringify } from 'qs';
import {
  LoginParamsType,
  RegisterParamsType,
  MemberDetailParamsType,
  ChangePasswordParamsType,
} from '@/interfaces/base';

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

export async function MemberDetail(params: MemberDetailParamsType) {
  const { companyType } = params;
  return request(`/api/${companyType}/member/detail`);
}

export async function ChangePassword(params: ChangePasswordParamsType) {
  const { companyType, form } = params;
  return request(`/api/${companyType}/member`, {
    method: 'PUT',
    data: form,
  });
}
