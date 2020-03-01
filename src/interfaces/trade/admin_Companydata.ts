import { CompanyModeType, CheckStepType } from '../global';

// 基本资料详情接口
export interface BaseDataDetailResType {
  companyCode?: string;
  companyName?: string;
  regionCode?: string;
  region?: string;
  address?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
  logoUrl?: string;
  companyMode?: CompanyModeType;
}

// 基本资料修改接口
export interface BaseDataChangeParamsType {
  company: BaseDataChangeFormType;
}
export interface BaseDataChangeFormType {
  regionCode: string;
  region: string;
  address: string;
  contact: string;
  telephone: string;
  cellphone: string;
  logoUrl?: string;
  companyMode: string;
}
export interface BaseDataChangeResType {
  token?: number;
}

// 认证信息详情接口
export interface InfoDetailResType {
  scc?: string;
  tradeName?: string;
  taxCode?: string;
  cusCode?: string;
  licenseUrl?: string;
  contrTpl1?: string;
  contrTpl2?: string;
  seal?: string;
  siteAddr?: string;
  isOwnSite?: boolean;
  siteInsDate?: string;
  checkStep?: CheckStepType;
}

// 认证信息修改接口
export interface InfoChangeParamsType {
  company: InfoChangeFormType;
}
export interface InfoChangeFormType {
  scc?: string;
  tradeName?: string;
  taxCode?: string;
  cusCode?: string;
  licenseUrl?: string;
  contrTpl1?: string;
  contrTpl2?: string;
  seal?: string;
  siteAddr?: string;
  isOwnSite?: boolean;
}
export interface InfoChangeResType {
  token?: number;
}
