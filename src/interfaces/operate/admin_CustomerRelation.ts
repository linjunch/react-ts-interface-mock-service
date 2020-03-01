import {
  CustomerSortType,
  CompanyModeType,
  CheckStepType,
  StatusType,
  LockStatusType,
  SortType,
  ServiceType,
  ContractStepType,
  DeclareType,
} from '../global';

// 客户列表接口
export interface AdminCustomerListParamsType {
  supplierName?: string;
  insDateL?: string;
  insDateU?: string;
  direction?: boolean;
  sort?: CustomerSortType;
  page?: number;
  size?: number;
}
export interface AdminCustomerListResType {
  id?: number;
  supplierCode?: string;
  supplierName?: string;
  region?: string;
  contact?: string;
  cellphone?: string;
  insDate?: string;
}

// 客户详情接口
export interface AdminCustomerDetailParamsType {
  supplierToken: number;
}
export interface AdminCustomerDetailResType {
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
export interface AdminFactoryListParamsType {
  supplierToken: number;
  factoryName?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: CheckStepType;
  direction?: boolean;
  sort?: CustomerSortType;
  page?: number;
  size?: number;
}
export interface AdminFactoryListResType {
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
export interface AdminFactoryDetailParamsType {
  factoryToken: number;
}
export interface AdminFactoryDetailResType {
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

// 生产单位锁接口
export interface AdminFactoryLockParamsType {
  factoryToken: number;
  lockStatus: LockStatusType;
}
export interface AdminFactoryLockResType {
  token: number;
}

// 销售单位列表接口
export interface AdminOwnerListParamsType {
  supplierToken: number;
  ownerName?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: CheckStepType;
  direction?: boolean;
  sort?: CustomerSortType;
  page?: number;
  size?: number;
}
export interface AdminOwnerListResType {
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
export interface AdminOwnerDetailParamsType {
  ownerToken: number;
}
export interface AdminOwnerDetailResType {
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

// 销售单位锁接口
export interface AdminOwnerLockParamsType {
  ownerToken: number;
  lockStatus: LockStatusType;
}
export interface AdminOwnerLockResType {
  token: number;
}

// 自营发货人列表接口
export interface AdminTradeListParamsType {
  supplierToken: number;
  tradeName?: string;
  status?: Exclude<StatusType, 'deleted'>;
  step?: CheckStepType;
  direction?: boolean;
  sort?: CustomerSortType;
  page?: number;
  size?: number;
}
export interface AdminTradeListResType {
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
export interface AdminTradeDetailParamsType {
  tradeToken: number;
}
export interface AdminTradeDetailResType {
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

// 协议列表接口
export interface AdminContractListParamsType {
  supplierToken: number;
  contractCode?: string;
  effectiveDateL?: string;
  effectiveDateU?: string;
  step?: CheckStepType;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}
export interface AdminContractListResType {
  id?: number;
  contractCode?: string;
  serviceType?: Exclude<ServiceType, 'declareService'>;
  tradeName?: string;
  ownerName?: string;
  taxRate?: number;
  subsidyRate?: number;
  effectiveDate?: string;
  expiryDate?: string;
  isLock?: boolean;
  status?: StatusType;
  step?: ContractStepType;
}

// 协议详情接口
export interface AdminContractDetailParamsType {
  contractToken: number;
}
export interface AdminContractDetailResType {
  contractCode?: string;
  deputy?: string;
  deputyNo?: string;
  tradeName?: string;
  supplierCode?: string;
  serviceType?: Exclude<ServiceType, 'declareService'>;
  declareType?: DeclareType;
  declareMark?: string;
  ownerCode?: string;
  ownerName?: string;
  primDate?: string;
  primData?: Array<object>;
  checkData?: Array<object>;
  checkDate?: string;
  checkMan?: string;
  fileCode?: string;
  contractUrl?: string;
  taxRate?: number;
  subsidyRate?: number;
  bankName?: string;
  bankNameEn?: string;
  bankAddr?: string;
  bankAddrEn?: string;
  bankSwift?: string;
  bankCode?: string;
  isVirtualAccount?: boolean;
  effectiveDate?: string;
  expiryDate?: string;
  salesmanId?: number;
  salesman?: string;
  insUser?: string;
  insDate?: string;
  isLock?: boolean;
  status?: StatusType;
  contractStep?: ContractStepType;
}

// 客户指派列表接口
export interface AdminSalesmenListParamsType {
  supplierToken: number;
}
export interface AdminSalesmenListResType {
  managerId?: number;
  managerName?: string;
  status?: Exclude<StatusType, 'all' | 'deleted'>;
}

// 客户指派创建接口
export interface AdminSalesmenCreateParamsType {
  supplierToken: number;
  salesmanToken: number;
}
export interface AdminSalesmenCreateResType {
  token: number;
}

// 客户指派状态接口
export interface AdminSalesmenStateParamsType {
  supplierToken: number;
  salesmanToken: number;
  val: Exclude<StatusType, 'all' | 'deleted'>;
}
export interface AdminSalesmenStateResType {
  token: number;
}

// 客户指派删除接口
export interface AdminSalesmenDeleteParamsType {
  supplierToken: number;
  salesmanToken: number;
}
export interface AdminSalesmenDeleteResType {
  token: number;
}
