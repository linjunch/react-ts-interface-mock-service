import { StatusType, CheckStepType, CustomerSortType, CompanyModeType } from '../global';

// 综服企业列表接口
export interface EnsembleTradeListParamsType {
  tradeName?: string;
  status?: Exclude<StatusType, 'deleted'>;
  checkStep?: CheckStepType;
  direction?: boolean;
  sort?: CustomerSortType;
  page?: number;
  size?: number;
}
export interface EnsembleTradeListResType {
  id?: number;
  tradeName?: string;
  region?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
  insDate?: string;
  status?: Exclude<StatusType, 'all'>;
  checkStep?: Exclude<CheckStepType, 'all'>;
}
// 综服企业详情接口
export interface EnsembleTradeDetailParamsType {
  tradeToken: number;
}
export interface EnsembleTradeDetailResType {
  tradeCode?: string;
  tradeName?: string;
  regionCode?: string;
  region?: string;
  address?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
  logoUrl?: string;
  companyMode?: CompanyModeType;
  scc?: string;
  taxCode?: string;
  cusCode?: string;
  licenseUrl?: string;
  contrTpl1?: string;
  contrTpl2?: string;
  seal?: string;
  siteAddr?: string;
  isOwnSite?: boolean;
  siteInsDate?: string;
  checkStep?: Exclude<CheckStepType, 'all'>;
}
// 综服企业创建接口
export interface EnsembleTradeCreateParamsType {
  trade: EnsembleTradeCreateFormType;
}
export interface EnsembleTradeCreateFormType {
  account: string;
  company: EnsembleTradeCreateItemType;
  password: string;
}
export interface EnsembleTradeCreateItemType {
  contacts: string;
  cellphone: string;
  companyName: string;
}
export interface EnsembleTradeCreateResType {
  token?: number;
}
// 综服企业状态接口
export interface EnsembleTradeStateParamsType {
  tradeToken: number;
  val: Exclude<StatusType, 'all'>;
}
export interface EnsembleTradeStateResType {
  token: number;
}
// 默认账号详情接口
export interface DefaultAccountParamsType {
  tradeToken: number;
}
export interface DefaultAccountResType {
  account?: string;
  password?: string;
}
