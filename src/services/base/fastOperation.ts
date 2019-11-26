import request from '@/utils/request';
import { stringify } from 'qs';
import {
  LoginParamsType,
  RegisterParamsType,
  MemberDetailParamsType,
  ChangePasswordParamsType,
  LogoutParamsType,
  WeChatBindingParamsType,
  PhoneBindingParamsType,
  EmailBindingParamsType,
  MemberLikeParamsType
} from '@/interfaces/base';

// 登录接口
export async function login(params: LoginParamsType) {
  const { companyType, form } = params;
  return request(`/api/${companyType}/login`, {
    method: 'POST',
    data: form,
  });
}

// 注册接口
export async function register(params: RegisterParamsType) {
  const { companyType, form, source } = params;
  return request(`/api/${companyType}/register?${stringify(source)}`, {
    method: 'POST',
    data: form,
  });
}

// 个人详情接口
export async function memberDetail(params: MemberDetailParamsType) {
  const { companyType } = params;
  return request(`/api/${companyType}/member/detail`);
}

// 密码修改接口
export async function changePassword(params: ChangePasswordParamsType) {
  const { companyType, form } = params;
  return request(`/api/${companyType}/member`, {
    method: 'PUT',
    data: form,
  });
}

// 退出登录接口
export async function logout(params: LogoutParamsType) {
  const { companyType } = params;
  return request(`/api/${companyType}/logout`);
}

// 微信绑定接口
export async function weChatBinding(params: WeChatBindingParamsType) {
  const { companyType, form } = params;
  return request(`/api/${companyType}/member/wx`, {
    method: 'PUT',
    data: form,
  });
}

// 手机绑定接口
export async function phoneBinding(params: PhoneBindingParamsType) {
  const { companyType, form } = params;
  return request(`/api/${companyType}/member/cellphone`, {
    method: 'PUT',
    data: form,
  });
}

// 邮箱绑定接口
export async function emailBinding(params: EmailBindingParamsType) {
  const { companyType, form } = params;
  return request(`/api/${companyType}/member/email`, {
    method: 'PUT',
    data: form,
  });
}

// 偏好设置接口
export async function memberLike(params: MemberLikeParamsType) {
  const { companyType, form } = params;
  return request(`/api/${companyType}/member/like`, {
    method: 'PUT',
    data: form,
  });
}