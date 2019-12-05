import {
  CustomerSortType,
  StatusType,
  CheckStepType,
  ServiceType,
  DeclareType,
  CompanyModeType,
  SortType,
  ContractStepType,
} from '../global';

// 生产销售Res通用
interface FactoryOwnersPublicType {
  region?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
  insDate?: string;
  status?: Exclude<StatusType, 'all'>;
  step?: CheckStepType;
}

// 协议通用
interface ContractPublicType {
  contractCode: string;
  serviceType: Exclude<ServiceType, 'declareService'>;
  declareType: DeclareType;
  declareMark?: string;
  ownerCode: string;
  ownerName: string;
  deputy: string;
  deputyNo: string;
  fileCode: string;
  taxRate: number;
  subsidyRate: number;
  bankId: number;
  effectiveDate: string;
  expiryDate: string;
}

// 客户列表接口
export interface SupplierListParamsType {
  supplierName?: string;
  insDateL?: string;
  insDateU?: string;
  direction?: boolean;
  sort?: CustomerSortType;
  page?: number;
  size?: number;
}
export interface SupplierListResType {
  id?: number;
  supplierCode?: string;
  supplierName?: string;
  region?: string;
  contact?: string;
  cellphone?: string;
  insDate?: string;
}

// 客户详情接口
export interface SupplierDetailParamsType {
  supplierToken: number;
}
export interface SupplierDetailResType {
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
export interface FactoryListResType extends FactoryOwnersPublicType {
  id?: number;
  factoryCode: string;
  factoryName?: string;
}

// 生产单位详情接口
export interface FactoryDetailParamsType {
  factoryToken: number;
}
export interface FactoryDetailResType extends FactoryOwnersPublicType {
  factoryCode?: string;
  factoryName?: string;
  scc?: string;
  taxCode?: string;
  licenseUrl?: string;
  regionCode?: string;
  address?: string;
  insUser?: string;
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
export interface OwnerListResType extends FactoryOwnersPublicType {
  id?: number;
  ownerCode: string;
  ownerName?: string;
}

// 销售单位详情接口
export interface OwnerDetailParamsType {
  ownerToken: number;
}
export interface OwnerDetailResType extends FactoryOwnersPublicType {
  ownerCode?: string;
  ownerName?: string;
  ownerNameEn?: string;
  ownerKey?: string;
  scc?: string;
  cusCode?: string;
  taxCode?: string;
  licenseUrl?: string;
  regionCode?: string;
  address?: string;
  bankName?: string;
  bankNo?: string;
  companyMode?: CompanyModeType;
  ownerType?: string;
  insUser?: string;
}

// 协议列表接口
export interface ContractListparamsType {
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
export interface ContractListResType {
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
  status?: Exclude<StatusType, 'all'>;
  step?: ContractStepType;
}

// 协议详情接口
export interface ContractDetailparamsType {
  contractToken: number;
}
export interface ContractDetailResType extends Exclude<ContractPublicType, 'bankId'> {
  tradeName?: string;
  supplierCode?: string;
  primDate?: string;
  primData?: Array<any>;
  checkData?: Array<any>;
  checkDate?: string;
  checkMan?: string;
  contractUrl?: string;
  bankName?: string;
  bankNameEn?: string;
  bankAddr?: string;
  bankAddrEn?: string;
  bankSwift?: string;
  bankCode?: string;
  isVirtualAccount?: boolean;
  salesmanId?: number;
  salesman?: string;
  insUser?: string;
  insDate?: string;
  isLock?: boolean;
  status?: Exclude<StatusType, 'all'>;
  contractStep?: ContractStepType;
}

// 协议查验接口
export interface ContractCheckparamsType {
  contractToken: number;
  form: ContractCheckFormType;
}
export interface ContractCheckFormType {
  cprimData: Array<string>;
}
export interface ContractCheckResType {
  token: number;
}

// 协议创建接口
export interface ContractCreateparamsType {
  supplierToken: number;
  submit: boolean;
  contract: ContractPublicType;
}
export interface ContractCreateResType {
  tonken?: number;
}
// 协议修改接口
export interface ContractChangeparamsType {
  supplierToken: number;
  contractToken: number;
  submit: boolean;
  contract: ContractPublicType;
}
export interface ContractChangeResType {
  tonken?: number;
}
