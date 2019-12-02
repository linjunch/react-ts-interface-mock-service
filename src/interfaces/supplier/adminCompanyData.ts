import { StatusType, CheckStepType, CompanySortType, CompanyModeType } from '../global';
import { PickRequired } from '../utils';

// 列表入口参数共有参数接口
interface PublicListParamsType {
  status?: Exclude<StatusType, 'deleted'>;
  step?: CheckStepType;
  direction?: boolean;
  sort?: Extract<CompanySortType, 'insDate'>;
  page?: number;
  size?: number;
}

// 列表返回参数共有参数接口
interface PublicListResType {
  id?: number;
  region?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
  insDate?: string;
  status?: Exclude<StatusType, 'all'>;
  step?: CheckStepType;
}

// 详情、修改、创建共有参数接口
interface PublicElemsType {
  regionCode?: string;
  region?: string;
  address?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
}

// 详情接口通用参数接口
interface PublicDetailType {
  insUser?: string;
  insDate?: string;
  status?: Exclude<StatusType, 'all'>;
  step?: CheckStepType;
}

// 基本资料详情接口
export interface CompanyDetailResType extends PublicElemsType {
  companyCode?: string;
  companyName?: string;
  logoUrl?: string;
  companyMode?: CompanyModeType;
  tradeName?: string;
}

// 基本资料修改接口
export interface CompanyChangeParamsType {
  company: CompanyChangeFormType;
}
export interface CompanyChangeFormType extends Required<PublicElemsType> {
  logoUrl?: string;
  companyMode: string;
}
export interface CompanyChangeResType {
  token?: number;
}

// 自营发货人列表接口
export interface TradeListParamsType extends PublicListParamsType {
  tradeName?: string;
}
export interface TradeListResType extends PublicListResType {
  tradeName?: string;
}

// 自营发货人详情接口
export interface TradeDetailParamsType {
  tradeToken: number;
}
export interface TradeDetailResType extends PublicElemsType, PublicDetailType {
  tradeName?: string;
  tradeNameEn?: string;
  scc?: string;
  cusCode?: string;
}

// 自营发货人创建接口
export interface TradeCreateParamsType {
  trade: TradeCreateFormType;
}
export interface TradeCreateFormType
  extends PickRequired<PublicElemsType, 'contact' | 'cellphone'> {
  tradeName: string;
  tradeNameEn?: string;
  scc: string;
  cusCode: string;
}
export interface TradeCreateResType {
  token?: number;
}

// 自营发货人修改接口
export interface TradeChangeParamsType {
  tradeToken: number;
  trade: TradeChangeFormType;
}
export interface TradeChangeFormType
  extends PickRequired<PublicElemsType, 'contact' | 'cellphone'> {
  tradeName: string;
  tradeNameEn?: string;
  scc: string;
  cusCode: string;
}
export interface TradeChangeResType {
  token?: number;
}
// 自营发货人状态接口
export interface TradeStateParamsType {
  tradeToken: number;
  val: Exclude<StatusType, 'all'>;
}
export interface TradeStateResType {
  token: number;
}

// 生产单位列表接口
export interface FactoryListParamsType extends PublicListParamsType {
  factoryName?: string;
}
export interface FactoryListResType extends PublicListResType {
  factoryCode?: string;
  factoryName?: string;
}

// 生产单位详情接口
export interface FactoryDetailParamsType {
  factoryToken: number;
}
export interface FactoryDetailResType extends PublicElemsType, PublicDetailType {
  factoryCode?: string;
  factoryName?: string;
  scc?: string;
  taxCode?: string;
  licenseUrl?: string;
}

// 生产单位创建接口
export interface FactoryCreateParamsType {
  factory: FactoryCreateFormType;
}
export interface FactoryCreateFormType
  extends PickRequired<
    PublicElemsType,
    'regionCode' | 'region' | 'address' | 'contact' | 'cellphone'
  > {
  factoryName: string;
  scc: string;
  taxCode: string;
  licenseUrl: string;
}
export interface FactoryCreateResType {
  token?: number;
}

// 生产单位修改接口
export interface FactoryChangeParamsType {
  factoryToken: number;
  factory: FactoryChangeFormType;
}
export interface FactoryChangeFormType
  extends PickRequired<
    PublicElemsType,
    'regionCode' | 'region' | 'address' | 'contact' | 'cellphone'
  > {
  factoryName: string;
  scc: string;
  taxCode: string;
  licenseUrl: string;
}
export interface FactoryChangeResType {
  token?: number;
}

// 生产单位状态接口
export interface FactoryStateParamsType {
  factoryToken: number;
  val: Exclude<StatusType, 'all'>;
}
export interface FactoryStateResType {
  token: number;
}

// 生产单位指派列表接口
export interface FactorySalesmenListParamsType {
  factoryToken: number;
}
export interface FactorySalesmenListResType {
  managerId?: number;
  managerName?: string;
  status?: Exclude<StatusType, 'all' | 'deleted'>;
}

// 生产单位指派创建接口
export interface FactorySalesmenCreateParamsType {
  factoryToken: number;
  salesmanToken: number;
}
export interface FactorySalesmenCreateResType {
  token: number;
}

// 生产单位指派状态接口
export interface FactorySalesmenStateParamsType {
  factoryToken: number;
  salesmanToken: number;
  val: Exclude<StatusType, 'all' | 'deleted'>;
}
export interface FactorySalesmenStateResType {
  token: number;
}
// 生产单位指派删除接口
export interface FactorySalesmenDeteteParamsType {
  factoryToken: number;
  salesmanToken: number;
}
export interface FactorySalesmenDeleteResType {
  token: number;
}

// 销售单位列表接口
export interface OwnerListParamsType extends PublicListParamsType {
  ownerName?: string;
}
export interface OwnerListResType extends PublicListResType {
  ownerCode?: string;
  ownerName?: string;
}

// 销售单位详情接口
export interface OwnerDetailParamsType {
  ownerToken: number;
}
export interface OwnerDetailResType extends PublicElemsType, PublicDetailType {
  ownerCode?: string;
  ownerName?: string;
  ownerNameEn?: string;
  ownerKey?: string;
  scc?: string;
  cusCode?: string;
  taxCode?: string;
  licenseUrl?: string;
  bankName?: string;
  bankNo?: string;
  companyMode?: CompanyModeType;
  ownerType?: string;
}

// 销售单位创建接口
export interface OwnerCreateParamsType {
  owner: OwnerCreateFormType;
}
export interface OwnerCreateFormType
  extends PickRequired<
    PublicElemsType,
    'regionCode' | 'region' | 'address' | 'contact' | 'cellphone'
  > {
  ownerName: string;
  ownerNameEn?: string;
  scc: string;
  cusCode: string;
  taxCode: string;
  licenseUrl: string;
  bankName: string;
  bankNo: string;
  companyMode: CompanyModeType;
  ownerType: string;
}
export interface OwnerCreateResType {
  token?: number;
}

// 销售单位修改接口
export interface OwnerChangeParamsType {
  ownerToken: number;
  owner: OwnerChangeFormType;
}
export interface OwnerChangeFormType
  extends PickRequired<
    PublicElemsType,
    'regionCode' | 'region' | 'address' | 'contact' | 'cellphone'
  > {
  ownerName: string;
  ownerNameEn?: string;
  scc: string;
  cusCode: string;
  taxCode: string;
  licenseUrl: string;
  bankName: string;
  bankNo: string;
  companyMode: CompanyModeType;
  ownerType: string;
}
export interface OwnerChangeResType {
  token?: number;
}

// 销售单位状态接口
export interface OwnerStateParamsType {
  ownerToken: number;
  val: Exclude<StatusType, 'all'>;
}
export interface OwnerStateResType {
  token: number;
}
