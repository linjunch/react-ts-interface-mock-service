import { CompanyType, RecordType, SourceType, DefaultView } from '../global';

// 登录接口
export interface LoginParamsType {
  companyType: CompanyType;
  form: LoginFormType;
}

export interface LoginFormType {
  account: string;
  password: string;
}

export interface LoginResType {
  account?: string;
  imageUrl?: string;
  root?: boolean;
  userName?: string;
  defaultView?: string;
  roleId?: string;
}

// 注册接口
export interface RegisterParamsType {
  companyType: Exclude<CompanyType, 'operator'>;
  source: SourceType;
  form: RegisterFormType;
}

export interface RegisterFormType {
  account: string;
  password: string;
  company: CompanyDataType;
}

export interface CompanyDataType {
  contacts: string;
  cellphone: string;
  companyName: string;
}

export interface RegisterResType extends CompanyDataType {}

// 个人详情接口
export interface MemberDetailParamsType {
  companyType: CompanyType;
}

export interface MemberDetailResType {
  account?: string;
  imageUrl?: string;
  name?: string;
  nameEn?: string;
  sex?: string;
  birthday?: string;
  cellphone?: string;
  cellphoneNotice?: boolean;
  email?: string;
  emailNotice?: boolean;
  qq?: string;
  position?: string;
}

// 密码修改接口
export interface ChangePasswordParamsType {
  companyType: CompanyType;
  form: ChangePasswordPFormType;
}

export interface ChangePasswordPFormType {
  password: string;
}

export interface ChangePasswordResType {
  account: string;
}

// 退出登录接口
export interface LogoutParamsType {
  companyType: CompanyType;
}

export interface LogoutResType {
  account?: string;
}

// 微信绑定接口
export interface WeChatBindingParamsType {
  companyType: CompanyType;
  form: WeChatBindingFormType;
}

export interface WeChatBindingFormType {
  wx: string;
}

export interface WeChatBindingResType extends WeChatBindingFormType {}

// 手机绑定接口
export interface PhoneBindingParamsType {
  companyType: CompanyType;
  form: PhoneBindingFormType;
}

export interface PhoneBindingFormType {
  cellphone: string;
}

export interface PhoneBindingResType extends PhoneBindingFormType {}

// 邮箱绑定接口
export interface EmailBindingParamsType {
  companyType: CompanyType;
  form: EmailBindingFormType;
}

export interface EmailBindingFormType {
  email: string;
}

export interface EmailBindingResType extends EmailBindingFormType {}

// 偏好设置接口
export interface MemberlikeParamsType {
  companyType: CompanyType;
  form: MemberlikeFormType;
}

export interface MemberlikeFormType {
  defaultView: DefaultView;
}
export interface MemberlikeResType {
  defaultView: Extract<DefaultView, 'SS' | 'SA'>;
}
