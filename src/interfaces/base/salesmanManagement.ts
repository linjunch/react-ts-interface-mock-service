import { CompanyType, StatusType, SortType } from '../global';

// 业务员列表接口
export interface SalemanListParamsType {
  companyType: CompanyType;
  account?: string;
  name?: string;
  status?: Exclude<StatusType, 'deleted'>;
  direction?: boolean;
  sort?: SortType;
  page?: number;
  size?: number;
}

export interface SalemanListResType {
  managerId?: number;
  account?: string;
  name?: string;
  cellphone?: string;
  capacity?: number;
  status?: Exclude<StatusType, 'deleted'>;
}

// 业务员创建接口
export interface SalemanCreateParamsType {
  companyType: CompanyType;
  saleman: SalemanCreateFormType;
}

export interface SalemanCreateFormType {
  managerId: number;
  capacity: number;
}

export interface SalemanCreateResType {
  token?: number;
}

// 库容修改接口
export interface SalemanCapacityParamsType {
  companyType: CompanyType;
  salemanToken: number;
  form: SalemanCapacityFormType;
}

export interface SalemanCapacityFormType {
  capacity: number;
}

export interface SalemanCapacityResType {
  token?: number;
}

// 业务员状态接口
export interface SalemansStateParamsType {
  companyType: CompanyType;
  salemanToken: number;
  val: Exclude<StatusType, 'deleted' | 'all'>;
}

export interface SalemanStateResType {
  token: number;
}
