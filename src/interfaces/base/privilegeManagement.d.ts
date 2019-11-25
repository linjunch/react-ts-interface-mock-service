import { CompanyType, DefaultViewType, StatusType, SortType, SexType } from '../global';

// public：角色列表接口
export interface LevelListType {
  menu?: string;
  level?: string[];
}

// 角色列表接口
export interface RoleListParamsType {
  companyType: CompanyType;
  roleName?: string;
  status?: Exclude<StatusType, 'deleted'>;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}

export interface RoleListResType {
  id?: string;
  roleName?: string;
  isRoot?: boolean;
  insDate?: string;
  status?: Exclude<StatusType, 'all'>;
}

// 角色详情接口
export interface RoleDetailParamsType {
  companyType: CompanyType;
  roleToken: number;
}

export interface RoleDetailResType {
  id?: string;
  roleName?: string;
  levels?: LevelListType;
  insUser?: string;
  insDate?: string;
  sort?: number;
  isRoot?: boolean;
  status?: Exclude<StatusType, 'all'>;
}

// 角色创建接口
export interface RoleCreateParamsType {
  companyType: CompanyType;
  role: RolesCreateFormType;
}

export interface RoleCreateFormType {
  roleName: string;
  sort: number;
  levels: LevelListType;
}

export interface RoleCreateResType {
  token?: string;
}

// 角色修改接口
export interface RoleChangeParamsType {
  companyType: CompanyType;
  roleToken: number;
  role: RoleChangeFormType;
}

export interface RoleChangeFormType {
  roleName?: string;
  sort?: number;
  levels: LevelListType;
}

export interface RoleChangeResType {
  token?: string;
}

// 角色状态接口
export interface RoleStateParamsType {
  companyType: CompanyType;
  roleToken: number;
  val: Exclude<StatusType, 'all'>;
}

export interface RoleStateResType {
  token: string;
}

// public:管理员信息表单
export interface AdminFormType {
  account: string;
  password: string;
  name: string;
  imageUrl?: string;
  sex: SexType;
  birthday?: string;
  cellphone: string;
  cellphoneNotice?: boolean;
  email?: string;
  emailNotice?: boolean;
  defaultView?: Extract<DefaultViewType, 'SS' | 'SA'>;
  nameEn?: string;
  qq?: string;
  position?: string;
  roleId?: number;
  status?: Exclude<StatusType, 'all'>;
}

// 管理员列表接口
export interface AdminListParamsType {
  companyType: CompanyType;
  account?: string;
  name?: string;
  insDateL?: string;
  insDateU?: string;
  status?: Exclude<StatusType, 'deleted'>;
  direction?: boolean;
  sort?: SortType;
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
  status?: Exclude<StatusType, 'deleted'>;
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
  sex?: SexType;
  birthday?: string;
  cellphone?: string;
  cellphoneNotice?: boolean;
  email?: string;
  emailNotice?: boolean;
  defaultView: Extract<DefaultViewType, 'SS' | 'SA'>;
  insUser?: string;
  insDate?: string;
  loginDate?: string;
  loginTimes?: number;
  loginIp?: string;
  lastLoginDate?: string;
  lastLoginIp?: string;
  isRoot?: boolean;
  nameEn?: string;
  qq?: string;
  position?: string;
  roleId?: number;
  status?: Exclude<StatusType, 'all'>;
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
export interface AdminChangeParamsType {
  companyType: CompanyType;
  managerToken: number;
  manager: AdminChangeFormType;
}

export interface AdminChangeFormType {
  companyType: CompanyType;
  managerToken: number;
  manager: AdminFormType;
}

export interface AdminChangeResType {
  token?: string;
}

// 管理员状态接口
export interface AdminStateParamsType {
  companyType: CompanyType;
  managerToken: number;
  val: Exclude<StatusType, 'all'>;
}

export interface AdminStateResType {
  token: string;
}
