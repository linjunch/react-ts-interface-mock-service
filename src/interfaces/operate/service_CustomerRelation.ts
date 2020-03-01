import {
  CustomerRelationType,
  CustomerSortType,
  CompanyModeType,
  CheckStepType,
  StatusType,
  LockStatusType,
} from '../global';

// 客户列表接口
export interface CustomerListParamsType {
  type: CustomerRelationType;
  supplierName?: string;
  insDateL?: string;
  insDateU?: string;
  direction?: boolean;
  sort?: CustomerSortType;
  page?: number;
  size?: number;
}
export interface CustomerListResType {
  id?: number;
  supplierCode?: string;
  supplierName?: string;
  region?: string;
  contact?: string;
  cellphone?: string;
  insDate?: string;
}

// 客户详情接口
export interface CustomerDetailParamsType {
  supplierToken: number;
}
export interface CustomerDetailResType {
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

// 生产单位列表接口
export interface FactoryListParamsType {
  supplierToken: number;
  factoryName?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: CheckStepType;
  direction?: boolean;
  sort?: CustomerSortType;
  page?: number;
  size?: number;
}
export interface FactoryListResType {
  id?: number;
  factoryCode?: string;
  factoryName?: string;
  region?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
  insDate?: string;
  status?: StatusType;
  step?: CheckStepType;
}

// 生产单位详情接口
export interface FactoryDetailParamsType {
  factoryToken: number;
}
export interface FactoryDetailResType {
  factoryCode?: string;
  factoryName?: string;
  scc?: string;
  taxCode?: string;
  licenseUrl?: string;
  regionCode?: string;
  region?: string;
  address?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
  insUser?: string;
  insDate?: string;
  status?: StatusType;
  step?: CheckStepType;
}

// 生产单位审核接口
export interface FactoryStepParamsType {
  factoryToken: number;
  checkStep: Extract<CheckStepType, 'pass' | 'return' | 'reject'>;
}
export interface FactoryStepResType {
  token: number;
}

// 销售单位列表接口
export interface OwnerListParamsType {
  supplierToken: number;
  ownerName?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: CheckStepType;
  direction?: boolean;
  sort?: CustomerSortType;
  page?: number;
  size?: number;
}
export interface OwnerListResType {
  id?: number;
  ownerCode?: string;
  ownerName?: string;
  region?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
  insDate?: string;
  status?: StatusType;
  step?: CheckStepType;
}

// 销售单位详情接口
export interface OwnerDetailParamsType {
  ownerToken: number;
}
export interface OwnerDetailResType {
  ownerCode?: string;
  ownerName?: string;
  ownerNameEn?: string;
  ownerKey?: string;
  scc?: string;
  cusCode?: string;
  taxCode?: string;
  licenseUrl?: string;
  regionCode?: string;
  region?: string;
  address?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
  bankName?: string;
  bankNo?: string;
  companyMode?: CompanyModeType;
  ownerType?: string;
  insUser?: string;
  insDate?: string;
  status?: StatusType;
  step?: CheckStepType;
}

// 销售单位审核接口
export interface OwnerStepParamsType {
  ownerToken: number;
  checkStep: Extract<CheckStepType, 'pass' | 'return' | 'reject'>;
}
export interface OwnerStepResType {
  token: number;
}

// 自营发货人列表接口
export interface TradeListParamsType {
  supplierToken: number;
  tradeName?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: CheckStepType;
  direction?: boolean;
  sort?: CustomerSortType;
  page?: number;
  size?: number;
}
export interface TradeListResType {
  id?: number;
  tradeName?: string;
  region?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
  insDate?: string;
  status?: StatusType;
  step?: CheckStepType;
}

// 自营发货人详情接口
export interface TradeDetailParamsType {
  tradeToken: number;
}
export interface TradeDetailResType {
  tradeName?: string;
  tradeNameEn?: string;
  scc?: string;
  cusCode?: string;
  regionCode?: string;
  region?: string;
  address?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
  insUser?: string;
  insDate?: string;
  status?: StatusType;
  step?: CheckStepType;
}

// 自营发货人审核接口
export interface TradeStepParamsType {
  tradeToken: number;
  checkStep: Extract<CheckStepType, 'pass' | 'return' | 'reject'>;
}
export interface TradeStepResType {
  token: number;
}

// 自营发货人锁接口
export interface TradeLockParamsType {
  tradeToken: number;
  lockStatus: LockStatusType;
}
export interface TradeLockResType {
  token: number;
}
