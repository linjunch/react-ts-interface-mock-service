import request from '@/utils/request';
import { stringify } from 'qs';
import {
  RoleListParamsType,
  RoleDetailParamsType,
  RoleCreateParamsType,
  RoleChangeParamsType,
  RoleStateParamsType,
  AdminListParamsType,
  AdminDetailParamsType,
  AdminCreateParamsType,
  AdminChangeParamsType,
  AdminStateParamsType,
} from '@/interfaces/base';

// 角色列表接口
export async function rolesList(params: RoleListParamsType) {
  const { companyType, ...query } = params;
  return request(`/api/${companyType}/admin/roles?${stringify(query)}`);
}

// 角色详情接口
export async function rolesDetai(params: RoleDetailParamsType) {
  const { companyType, roleToken } = params;
  return request(`/api/${companyType}/admin/role/${roleToken}/detail`);
}

// 角色创建接口
export async function rolesCreate(params: RoleCreateParamsType) {
  const { companyType, role } = params;
  return request(`/api/${companyType}/admin/role`, {
    method: 'POST',
    data: role,
  });
}

// 角色修改接口
export async function roleChange(params: RoleChangeParamsType) {
  const { companyType, roleToken, role } = params;
  return request(`/api/${companyType}/admin/role/${roleToken}`, {
    method: 'PUT',
    data: role,
  });
}

// 角色状态接口
export async function roleState(params: RoleStateParamsType) {
  const { companyType, roleToken, val } = params;
  return request(`/api/${companyType}/admin/role/${roleToken}/state?${stringify(val)}`, {
    method: 'PUT',
  });
}

// 管理员列表接口
export async function adminList(params: AdminListParamsType) {
  const { companyType, ...query } = params;
  return request(`/api/${companyType}/admin/managers?${stringify(query)}`);
}

// 管理员详情接口
export async function adminDetail(params: AdminDetailParamsType) {
  const { companyType, managerToken } = params;
  return request(`/api/${companyType}/admin/manager/${managerToken}/detail`);
}
// 管理员创建接口
export async function adminCreate(params: AdminCreateParamsType) {
  const { companyType, submit, order } = params;
  return request(`/api/${companyType}/admin/manager?${stringify(submit)}`, {
    method: 'POST',
    data: order,
  });
}

// 管理员修改接口
export async function adminChange(params: AdminChangeParamsType) {
  const { companyType, managerToken, manager } = params;
  return request(`/api/${companyType}/admin/manager/${managerToken}`, {
    method: 'POST',
    data: manager,
  });
}

// 管理员状态接口
export async function adminState(params: AdminStateParamsType) {
  const { companyType, managerToken, val } = params;
  return request(`/api/${companyType}/admin/manager/${managerToken}/state?${stringify(val)}`, {
    method: 'PUT',
  });
}
