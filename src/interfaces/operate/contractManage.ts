import {
  CheckStepType,
  SortType,
  ContractStepType,
  StatusType,
  ServiceType,
  DeclareType,
} from '../global';

// 协议列表接口
export interface ContractListParamsType {
  ownerName?: string;
  supplierName?: string;
  tradeName?: string;
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
export interface ContractDetailParamsType {
  contractToken: number;
}
export interface ContractDetailResType {
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
  status?: Exclude<StatusType, 'all'>;
  contractStep?: ContractStepType;
}

// 协议进度接口
export interface ContractStepParamsType {
  contractToken: number;
  contractStep: Extract<ContractStepType, 'pass' | 'refuse'>;
}
export interface ContractStepResType {
  token: number;
}
