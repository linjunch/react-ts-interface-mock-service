import {
  CheckStepType,
  ContractsStepType,
  SortType,
  StatusType,
  ServiceType,
  DeclareType,
} from '../global';

// 协议列表接口
export interface ContractListParamsType {
  contractCode?: string;
  effectiveDateL?: string;
  effectiveDateU?: string;
  step?: CheckStepType | 'all';
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}

export interface ContractListResType {
  id?: string;
  contractCode?: string;
  serviceType?: string;
  tradeName?: string;
  ownerName?: string;
  taxRate?: number;
  subsidyRate?: number;
  effectiveDate?: string;
  expiryDate?: string;
  isLock?: boolean;
  status?: Exclude<StatusType, 'all'>;
  step?: ContractsStepType;
}

// 协议详情接口
export interface ContractDetailParamsType {
  contractToken: string;
}

export interface ContractDetailResType {
  contractCode?: string;
  deputy?: string;
  deputyNo?: string;
  tradeName?: string;
  supplierCode?: string;
  serviceType?: ServiceType;
  declareType?: DeclareType;
  declareMark?: string;
  ownerCode?: string;
  owneName?: string;
  primDate?: Array<object>;
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
  isLock?: number;
  status?: Exclude<StatusType, 'all'>;
  contractStep?: ContractsStepType;
}

// 协议签订接口
export interface ContractSignParamsType {
  contractToken: string;
  form: ContractSignFormType;
}

export interface ContractSignFormType {
  primData: Array<string>;
}

export interface ContractSignResType {
  token: string;
}

// 协议拒绝接口
export interface ContractRefuseParamsType {
  contractToken: string;
}

export interface ContractRefusResType {
  token: string;
}
