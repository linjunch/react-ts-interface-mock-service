import { CompanyType, DefaultView, Status, Sort } from '../global';

// public：角色列表接口
export interface LevelListType {
  menu?: string;
  level?: string[];
}

// 角色列表接口
export interface RolesListParamsType {
  companyType: CompanyType;
  roleName?: string;
  status?: Exclude<Status, 'deleted'>;
  direction?: boolean;
  sort?: Sort;
  page?: number;
  size?: number;
}

export interface RolesListResType {
  id?: string;
  roleName?: string;
  isRoot?: boolean;
  insDate?: string;
  status?: Exclude<Status, 'all'>;
}

// 角色详情接口
export interface RolesDetailParamsType {
  companyType: CompanyType;
  roleToken: number;
}

export interface RolesDetailResType {
  id?: string;
  roleName?: string;
  levels?: LevelListType;
  insUser?: string;
  insDate?: string;
  sort?: number;
  isRoot?: boolean;
  status?: Exclude<Status, 'all'>;
}

// 角色创建接口
export interface RolesCreateParamsType {
  companyType: CompanyType;
  role: RolesCreateFormType;
}

export interface RolesCreateFormType {
  roleName: string;
  sort: number;
  levels: LevelListType;
}

export interface RolesCreateResType {
  token?: string;
}

// 角色修改接口
export interface ChangeRoleParamsType {
  companyType: CompanyType;
  roleToken: number;
  role: ChangeRoleFormType;
}

export interface ChangeRoleFormType {
  roleName?: string;
  sort?: number;
  levels: LevelListType;
}

export interface ChangeRoleResType {
  token?: string;
}

// 角色状态接口
export interface RoleStateParamsType {
  companyType: CompanyType;
  roleToken: number;
  val: Exclude<Status, 'all'>;
}

export interface RoleStateResType {
  token: string;
}

// piblic:管理员信息表单
export interface AdminFormType {
  account: string;
  password: string;
  name: string;
  imageUrl?: string;
  sex: number;
  birthday?: string;
  cellphone: string;
  cellphoneNotice?: boolean;
  email?: string;
  emailNotice?: boolean;
  defaultView?: Extract<DefaultView, 'SS' | 'SA'>;
  nameEn?: string;
  qq?: string;
  position?: string;
  roleId?: number;
  status?: Exclude<Status, 'all'>;
}

// 管理员列表接口
export interface AdminListParamsType {
  companyType: CompanyType;
  account?: string;
  name?: string;
  insDateL?: string;
  insDateU?: string;
  status?: Exclude<Status, 'deleted'>;
  direction?: boolean;
  sort?: Sort;
  page?: number;
  size?: number;
}

export interface AdminListResType {
  id?: string;
  account?: string;
  name?: string;
  nameEn?: string;
  cellphone?: string;
  position?: string;
  status?: Exclude<Status, 'deleted'>;
}

// 管理员详情接口
export interface AdminDetailParamsType {
  companyType: CompanyType;
  managerToken: number;
}

export interface AdminDetailResType {
  account?: string;
  name?: string;
  imageUrl?: string;
  sex?: number;
  birthday?: string;
  cellphone?: string;
  cellphoneNotice?: boolean;
  email?: string;
  emailNotice?: boolean;
  defaultView: Extract<DefaultView, 'SS' | 'SA'>;
  insUser?: string;
  insDate?: number;
  loginDate?: string;
  loginTimes?: number;
  loginIp?: string;
  lastLoginDate?: string;
  lastLoginIp?: string;
  isRoot?: boolean;
  nameEn?: string;
  qq?: string;
  position?: string;
  naroleIdme?: number;
  status?: Exclude<Status, 'all'>;
}

// 管理员创建接口
export interface AdminCreateParamsType {
  companyType: CompanyType;
  submit: boolean;
  order: AdminFormType;
}

export interface AdminCreateResType {
  token?: string;
}

// 管理员修改接口
export interface ChangeAdminParamsType {
  companyType: CompanyType;
  managerToken: number;
  manager: ChangeAdminFormType;
}

export interface ChangeAdminFormType {
  companyType: CompanyType;
  managerToken: number;
  manager: AdminFormType;
}

export interface ChangeAdminResType {
  token?: string;
}

// 管理员状态接口
export interface AdminStateParamsType {
  companyType: CompanyType;
  managerToken: number;
  val: Exclude<Status, 'all'>;
}

export interface AdminStateResType{
    token:string
}
