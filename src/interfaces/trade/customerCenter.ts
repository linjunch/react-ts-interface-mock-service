import { CustomerType } from '../global';
import { PickRequired } from '../utils';

// 客户信息通用接口
interface VisitPublicType {
  visitDate?: string;
  method?: string;
  isLeader?: boolean;
  purpose?: string;
  contact?: string;
  cellphone?: string;
  describe?: string;
}

// 客户拜访列表接口
export interface VisitListParamsType {
  customerType: CustomerType;
  token: number;
  page?: number;
  size?: number;
}

export interface VisitListResType extends VisitListParamsType {
  id?: number;
  insUser?: string;
}

// 客户拜访详情接口
export interface VisitDetailParamsType {
  visitToken: number;
}

export interface VisitDetailResType {
  customerName?: string;
  file?: string;
  insUser?: string;
  insDate?: string;
}

// 客户拜访创建接口
export interface VisitCreateParamsType {
  customerType: CustomerType;
  token: number;
  visit: VisitCreateFormType;
}

export interface VisitCreateFormType
  extends PickRequired<VisitPublicType, 'visitDate' | 'method' | 'isLeader'> {
  file?: string;
}

export interface VisitCreateResType {
  token?: number;
}

// 客户备注列表接口
export interface CustomerRemarkListParamsType {
  customerType: CustomerType;
  token: number;
}

export interface CustomerRemarkListResType {
  remark?: string;
  insDate?: string;
}

// 客户备注创建接口
export interface CustomerRemarkCreateParamsType {
  customerType: CustomerType;
  token: number;
  remark: CustomerRemarkCreateFormType;
}

export interface CustomerRemarkCreateFormType {
  remark: string;
}

export interface CustomerRemarkCreateResType {
  token?: number;
}

// 联系人信息通用接口
interface ContactPublicType {
  name?: string;
  sex?: number;
  position?: string;
  telephone?: string;
  cellphone?: string;
  email?: string;
}

// 联系人列表接口
export interface ContactListParamsType {
  customerType: CustomerType;
  token: number;
}

export interface ContactListResType extends ContactPublicType {
  id?: string;
  insDate?: string;
}

// 联系人创建接口
export interface ContactCreateParamsType {
  customerType: CustomerType;
  token: number;
  contact: PickRequired<ContactPublicType, 'name' | 'sex' | 'position'>;
}

export interface ContactCreateResType {
  token?: number;
}

// 联系人修改接口
export interface ContactChangeParamsType {
  contactToken: number;
  contact: PickRequired<ContactPublicType, 'name' | 'sex' | 'position'>;
}

export interface ContactChangeResType {
  token?: number;
}
