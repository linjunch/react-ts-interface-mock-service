import { PotentialCustomersType, CustomerSortType, InputType } from '../global';

// 潜在客户通用属性接口
interface PotentialCustomerPublicType {
  customerName?: string;
  companyMode?: string;
  regionCode?: string;
  region?: string;
  address?: string;
  contact?: string;
  telephone?: string;
  cellphone?: string;
}

// 潜在客户列表接口
export interface PotentialCustomerListParamsType {
  type: PotentialCustomersType;
  customerName?: string;
  direction?: boolean;
  sort?: CustomerSortType;
  page?: number;
  size?: number;
}
export interface PotentialCustomerListResType
  extends Exclude<PotentialCustomerPublicType, 'address' | 'regionCode'> {
  id?: number;
  customerCode?: string;
  inputType?: InputType;
  insDate?: string;
}

// 潜在客户详情接口
export interface PotentialCustomerDetailParamsType {
  customerToken: number;
}
export interface PotentialCustomerDetailResType extends PotentialCustomerPublicType {
  insUser?: string;
  insDate?: string;
  inputType?: InputType;
  managerId?: number;
}

// 潜在客户捡入接口
export interface PotentialCustomerIncludeParamsType {
  customerToken: number;
}
export interface PotentialCustomerIncludeResType {
  token?: number;
}

// 潜在客户开放接口
export interface PotentialCustomerOutsideParamsType {
  customerToken: number;
}
export interface PotentialCustomerOutsideResType {
  token?: number;
}

// 潜在客户创建接口
export interface PotentialCustomerCreateParamsType {
  form: PotentialCustomerPublicType;
}
export interface PotentialCustomerCreateeResType {
  token?: number;
}
