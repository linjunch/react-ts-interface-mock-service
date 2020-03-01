import { ShAttrType, LedgerAttrType } from '../global';

// 收汇基础统计接口
export interface ShBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface ShBaseResType {
  date?: string;
  increment?: number;
  amt?: number;
}

// 收汇增长分析接口
export interface ShIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface ShIncreaseResType {
  date?: string;
  increment?: number;
  amt?: number;
}

// 收汇属性分布接口
export interface ShAttrParamsType {
  type: ShAttrType;
  page?: number;
  size?: number;
}
export interface ShAttrResType {
  name?: string;
  value?: number;
  ratio?: number;
}

// 退税基础统计接口
export interface LedgerBaseParamsType {
  dateL?: string;
  dateU?: string;
  page?: number;
  size?: number;
}
export interface LedgerBaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 退税增长分析接口
export interface LedgerIncreaseParamsType {
  dateL: string;
  dateU: string;
}
export interface LedgerIncreaseResType {
  date?: string;
  increment?: number;
  total?: number;
}

// 退税属性分布接口
export interface LedgerAttrParamsType {
  type: LedgerAttrType;
  page?: number;
  size?: number;
}
export interface LedgerAttrResType {
  name?: string;
  value?: number;
  totratioal?: number;
}
